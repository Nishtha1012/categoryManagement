const Category = require("../../../models/category");
const { buildErrObject } = require("../../../utils/buildErrorObject");

const deleteCategory = async ({ id }) => {
  const categoryToDelete = await Category.findById(id);
  if (!categoryToDelete) {
    throw buildErrObject(404, "CATEGORY_NOT_FOUND");
  }

  await Category.updateMany(
    { parent: id },
    { parent: categoryToDelete.parent }
  );

  return await Category.findByIdAndDelete(id);
};

module.exports = deleteCategory;
