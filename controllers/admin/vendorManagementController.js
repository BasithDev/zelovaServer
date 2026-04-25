const User = require('../../models/user');
const Restaurant = require('../../models/restaurant');
const statusCodes = require('../../config/statusCodes');

const getVendors = async (req, res, next) => {
  try {
    const { 
      search = '', 
      status = 'all',
      page = 1, 
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Calculate pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

    let vendorIds = null;

    // If searching, first search restaurants by name to get vendor IDs
    if (search) {
      const matchingRestaurants = await Restaurant.find({
        name: { $regex: search, $options: 'i' }
      }).select('vendorId');
      
      const restaurantVendorIds = matchingRestaurants.map(r => r.vendorId);
      
      // Also search vendors by name, email, phone
      const matchingVendors = await User.find({
        isVendor: true,
        $or: [
          { fullname: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } },
          { phoneNumber: { $regex: search, $options: 'i' } }
        ]
      }).select('_id');
      
      // Combine vendor IDs from both searches
      vendorIds = [...new Set([
        ...restaurantVendorIds.map(id => id.toString()),
        ...matchingVendors.map(v => v._id.toString())
      ])];
    }

    // Build filter query
    const filter = { isVendor: true };
    
    if (vendorIds !== null) {
      filter._id = { $in: vendorIds };
    }
    
    // Filter by status
    if (status !== 'all') {
      filter.status = status;
    }

    // Get total count for pagination
    const totalCount = await User.countDocuments(filter);
    
    // Fetch vendors with pagination and sorting
    const vendors = await User.find(filter)
      .select('-password')
      .sort(sort)
      .skip(skip)
      .limit(limitNum);

    // Get all vendor IDs for restaurant lookup
    const allVendorIds = vendors.map(v => v._id);
    
    // Get restaurant info for each vendor
    const restaurants = await Restaurant.find({ vendorId: { $in: allVendorIds } })
      .select('vendorId name isActive avgRating');

    // Map restaurants to vendors
    const vendorsWithRestaurants = vendors.map(vendor => {
      const vendorRestaurant = restaurants.find(r => r.vendorId.toString() === vendor._id.toString());
      return {
        ...vendor.toObject(),
        restaurant: vendorRestaurant || null
      };
    });

    // Get stats
    const stats = await User.aggregate([
      { $match: { isVendor: true } },
      {
        $group: {
          _id: null,
          totalVendors: { $sum: 1 },
          activeVendors: { $sum: { $cond: [{ $eq: ['$status', 'active'] }, 1, 0] } },
          blockedVendors: { $sum: { $cond: [{ $eq: ['$status', 'blocked'] }, 1, 0] } }
        }
      }
    ]);

    // Get restaurant stats
    const restaurantStats = await Restaurant.aggregate([
      {
        $group: {
          _id: null,
          totalRestaurants: { $sum: 1 },
          activeRestaurants: { $sum: { $cond: [{ $eq: ['$isActive', true] }, 1, 0] } }
        }
      }
    ]);

    res.status(statusCodes.OK).json({
      vendors: vendorsWithRestaurants,
      pagination: {
        currentPage: pageNum,
        totalPages: Math.ceil(totalCount / limitNum),
        totalItems: totalCount,
        itemsPerPage: limitNum
      },
      stats: {
        totalVendors: stats[0]?.totalVendors || 0,
        activeVendors: stats[0]?.activeVendors || 0,
        blockedVendors: stats[0]?.blockedVendors || 0,
        totalRestaurants: restaurantStats[0]?.totalRestaurants || 0,
        activeRestaurants: restaurantStats[0]?.activeRestaurants || 0
      }
    });
  } catch (error) {
    next(error);
  }
};

const blockUnblockVendor = async (req, res, next) => {
  try {
    const { vendorId } = req.params;
    const { status } = req.body;
    if (!["active", "blocked"].includes(status)) {
      return res.status(statusCodes.BAD_REQUEST).json({
        status: "Failed",
        message: "Invalid status value. Use 'active' or 'blocked'.",
      });
    }
    const updatedUser = await User.findByIdAndUpdate(
      vendorId,
      { status },
      { new: true }
    ).select('-password');
    
    if (!updatedUser) {
      return res.status(statusCodes.NOT_FOUND).json({
        status: "Failed",
        message: "Vendor not found",
      });
    }
    
    // Update restaurant status when vendor is blocked/unblocked
    if (status === "blocked") {
      await Restaurant.updateMany(
        { vendorId: vendorId },
        { isActive: false }
      );
    }
    
    res.status(statusCodes.OK).json({
      status: "Success",
      message: `Vendor ${status === "blocked" ? "blocked" : "unblocked"} successfully`,
      vendor: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getVendors,
  blockUnblockVendor
};