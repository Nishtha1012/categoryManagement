const Category = require("../../../models/category");
const { buildErrObject } = require("../../../utils/buildErrorObject");

const updateCategory = async ({ id, name, status }) => {
  console.time("Execution Time"); // Start timer

  const updatedCategory = await Category.findByIdAndUpdate(
    id,
    { name, status },
    { new: true, runValidators: true }
  );

  if (!updatedCategory) {
    throw buildErrObject(404, "CATEGORY_NOT_FOUND");
  }

  if (status === "inActive") {
    await deactivateSubcategories(id);
  }

  console.timeEnd("Execution Time"); // End timer and log the time taken
  return updatedCategory;
};

const deactivateSubcategories = async (parentId) => {
  const subcategories = await Category.find({
    parent: parentId,
    status: "active",
  });

  if (subcategories.length > 0) {
    await Category.updateMany({ parent: parentId }, { status: "inActive" });

    for (const sub of subcategories) {
      await deactivateSubcategories(sub._id);
    }
  }
};

module.exports = { updateCategory };
