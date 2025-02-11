const Category = require('../../../models/category');
const { buildErrObject } = require('../../../utils/buildErrorObject');

const getCategories = async () => {
  const categories = await Category.find({});

  if (!categories) throw buildErrObject(400, 'NO_CATEGORIES_FOUND');

  return nestedCategories(categories);
};

const nestedCategories = (categories, parentId = null) => {
  const childCategories = [];
  let parentCategories;

  if (parentId === null) {
    parentCategories = categories.filter((cat) => cat.parent == null);
  } else {
    parentCategories = categories.filter(
      (cat) => String(cat.parent) == String(parentId)
    );
  }

  for (cat of parentCategories) {
    childCategories.push({
      _id: cat._id,
      name: cat.name,
      status: cat.status,
      children: nestedCategories(categories, cat._id),
    });
  }

  return childCategories;
};

module.exports = getCategories;
