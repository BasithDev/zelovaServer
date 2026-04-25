const Category = require('../../models/category');
const SubCategory = require('../../models/subCategory');
const statusCodes = require('../../config/statusCodes');
const { MESSAGES } = require('../../config/constants');

const getCategories = async (req, res, next) => {
  try {
    const { 
      search = '',
      page = 1, 
      limit = 10,
      sortBy = 'name',
      sortOrder = 'asc'
    } = req.query;

    // Build filter query
    const filter = {};
    
    // Search by name
    if (search) {
      filter.name = { $regex: search, $options: 'i' };
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

    // Calculate pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Get total count for pagination
    const totalCount = await Category.countDocuments(filter);
    
    // Fetch categories with pagination and sorting
    const categories = await Category.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limitNum);

    // Get subcategory count for each category
    const subCategoryCounts = await SubCategory.aggregate([
      { $group: { _id: '$categoryName', count: { $sum: 1 } } }
    ]);

    // Map counts to categories
    const categoriesWithCounts = categories.map(cat => {
      const countObj = subCategoryCounts.find(sc => sc._id === cat.name);
      return {
        ...cat.toObject(),
        subCategoryCount: countObj?.count || 0
      };
    });

    // Get stats
    const totalCategories = await Category.countDocuments();
    const totalSubCategories = await SubCategory.countDocuments();

    res.status(statusCodes.OK).json({
      success: true,
      data: categoriesWithCounts,
      pagination: {
        currentPage: pageNum,
        totalPages: Math.ceil(totalCount / limitNum),
        totalItems: totalCount,
        itemsPerPage: limitNum
      },
      stats: {
        totalCategories,
        totalSubCategories
      }
    });
  } catch (error) {
    next(error);
  }
};

const getSubCategories = async (req, res, next) => {
  try {
    const { 
      search = '',
      categoryName = '',
      page = 1, 
      limit = 10,
      sortBy = 'name',
      sortOrder = 'asc'
    } = req.query;

    // Build filter query
    const filter = {};
    
    // Search by name
    if (search) {
      filter.name = { $regex: search, $options: 'i' };
    }

    // Filter by category name
    if (categoryName) {
      filter.categoryName = categoryName;
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

    // Calculate pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Get total count for pagination
    const totalCount = await SubCategory.countDocuments(filter);
    
    // Fetch subcategories with pagination and sorting (no populate needed)
    const subCategories = await SubCategory.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limitNum);

    res.status(statusCodes.OK).json({
      success: true,
      data: subCategories,
      pagination: {
        currentPage: pageNum,
        totalPages: Math.ceil(totalCount / limitNum),
        totalItems: totalCount,
        itemsPerPage: limitNum
      }
    });
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(statusCodes.NOT_FOUND).json({ success: false, message: MESSAGES.CATEGORY.NOT_FOUND });
    }

    // Check if category has subcategories
    const subCategoryCount = await SubCategory.countDocuments({ categoryName: category.name });
    if (subCategoryCount > 0) {
      return res.status(statusCodes.BAD_REQUEST).json({ 
        success: false, 
        message: MESSAGES.CATEGORY.CANNOT_DELETE_WITH_SUBCATEGORIES(subCategoryCount)
      });
    }

    await Category.findByIdAndDelete(id);
    res.status(statusCodes.OK).json({ success: true, message: MESSAGES.CATEGORY.DELETE_SUCCESS });
  } catch (error) {
    next(error);
  }
};

const deleteSubCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const subCategory = await SubCategory.findByIdAndDelete(id);
    if (!subCategory) {
      return res.status(statusCodes.NOT_FOUND).json({ success: false, message: MESSAGES.SUBCATEGORY.NOT_FOUND });
    }
    res.status(statusCodes.OK).json({ success: true, message: MESSAGES.SUBCATEGORY.DELETE_SUCCESS });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategories,
  deleteCategory,
  getSubCategories,
  deleteSubCategory
};