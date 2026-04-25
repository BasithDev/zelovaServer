const User = require('../../models/user');
const Order = require('../../models/orders');
const statusCodes = require('../../config/statusCodes');

const getUsers = async (req, res, next) => {
  try {
    const { 
      search = '', 
      status = 'all',
      page = 1, 
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build filter query - exclude admins only (vendors are also users)
    const filter = { isAdmin: { $ne: true } };
    
    // Search by name, email, or phone
    if (search) {
      filter.$or = [
        { fullname: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phoneNumber: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Filter by status
    if (status !== 'all') {
      filter.status = status;
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

    // Calculate pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Get total count for pagination
    const totalCount = await User.countDocuments(filter);
    
    // Fetch users with pagination and sorting
    const users = await User.find(filter)
      .select('-password')
      .sort(sort)
      .skip(skip)
      .limit(limitNum);

    // Get stats - exclude admins only (vendors are also users)
    const stats = await User.aggregate([
      { $match: { isAdmin: { $ne: true } } },
      {
        $group: {
          _id: null,
          totalUsers: { $sum: 1 },
          activeUsers: { $sum: { $cond: [{ $eq: ['$status', 'active'] }, 1, 0] } },
          blockedUsers: { $sum: { $cond: [{ $eq: ['$status', 'blocked'] }, 1, 0] } },
          totalZCoins: { $sum: { $ifNull: ['$zCoins', 0] } }
        }
      }
    ]);

    // Get total orders by users
    const orderStats = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalOrders: { $sum: 1 }
        }
      }
    ]);

    res.status(statusCodes.OK).json({
      users,
      pagination: {
        currentPage: pageNum,
        totalPages: Math.ceil(totalCount / limitNum),
        totalItems: totalCount,
        itemsPerPage: limitNum
      },
      stats: {
        totalUsers: stats[0]?.totalUsers || 0,
        activeUsers: stats[0]?.activeUsers || 0,
        blockedUsers: stats[0]?.blockedUsers || 0,
        totalZCoins: stats[0]?.totalZCoins || 0,
        totalOrders: orderStats[0]?.totalOrders || 0
      }
    });
  } catch (error) {
    next(error);
  }
};

const blockUnblockUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { status } = req.body;
    if (!["active", "blocked"].includes(status)) {
      return res.status(statusCodes.BAD_REQUEST).json({
        status: "Failed",
        message: "Invalid status value. Use 'active' or 'blocked'.",
      });
    }
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { status },
      { new: true }
    ).select('-password');
    
    if (!updatedUser) {
      return res.status(statusCodes.NOT_FOUND).json({
        status: "Failed",
        message: "User not found",
      });
    }
    
    res.status(statusCodes.OK).json({
      status: "Success",
      message: `User ${status === "blocked" ? "blocked" : "unblocked"} successfully`,
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  blockUnblockUser
};