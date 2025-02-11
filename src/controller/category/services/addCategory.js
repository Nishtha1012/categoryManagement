const Category = require("../../../models/category");

const addCategory = async ({ name, parent, status, }) => {
  const category = new Category({
    name,
    parent,
    status,
  });

  return await category.save();
};

module.exports = addCategory;
