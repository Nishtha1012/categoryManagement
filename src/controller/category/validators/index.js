const createCategorySchema = require("./createCategory.validator");
const deleteCategorySchema = require("./deleteCategory.validator");
const updateCategorySchema = require("./updateCategory.validator");

module.exports = {
  updateCategorySchema,
  createCategorySchema,
  deleteCategorySchema,
};
