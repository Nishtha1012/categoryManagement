const getValidatedData = require("../../utils/getValidatedData");
const { handleError } = require("../../utils/handleError");
const { deleteCategory } = require("./services");

const deleteCategoryController = async (req, res) => {
  try {
    const request = getValidatedData(req);

    const deletedCategory = await deleteCategory({
      id: request.id,
    });

    res.status(200).json(deletedCategory);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = deleteCategoryController;
