const Category = require('../../models/category')
const SubCategory = require('../../models/subCategory')
const statusCodes = require('../../config/statusCodes')
const { MESSAGES } = require('../../config/constants')

const addCategory = async (req, res, next) => {
  console.log('hello')
  try {
    const { name } = req.body;
    if (await Category.findOne({ name })) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: MESSAGES.CATEGORY.ALREADY_EXISTS });
    }
    const category = await new Category({ name }).save();
    res.status(statusCodes.CREATED).json({ message: MESSAGES.CATEGORY.ADDED_SUCCESS });
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.status(statusCodes.OK).json({ 
      message: categories.length ? MESSAGES.CATEGORY.RETRIEVED_SUCCESS : MESSAGES.CATEGORY.NONE_FOUND,
      categories 
    });
  } catch (error) {
    next(error);
  }
};

const getSubCategories = async (req, res, next) => {
  try {
    const subCategories = await SubCategory.find().sort({ name: 1 });
    res.status(statusCodes.OK).json({ 
      message: subCategories.length ? MESSAGES.SUBCATEGORY.RETRIEVED_SUCCESS : MESSAGES.CATEGORY.NONE_FOUND,
      subCategories 
    });
  } catch (error) {
    next(error);
  }
};

const addSubCategory = async (req, res, next) => {
  try {
    const { name, categoryName } = req.body;
    console.log(req.body)
    if (!(await Category.findOne({ name: categoryName }))) {
      return res.status(statusCodes.NOT_FOUND).json({ message: MESSAGES.CATEGORY.NOT_FOUND });
    }
    if (await SubCategory.findOne({ name })) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: MESSAGES.SUBCATEGORY.ALREADY_EXISTS });
    }
    const subCategory = await new SubCategory({ name, categoryName }).save();
    res.status(statusCodes.CREATED).json({ message: MESSAGES.SUBCATEGORY.ADDED_SUCCESS });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addCategory,
  getCategories,
  addSubCategory,
  getSubCategories
}