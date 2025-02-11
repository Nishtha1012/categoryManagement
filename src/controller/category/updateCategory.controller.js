const getValidatedData = require('../../utils/getValidatedData');
const { handleError } = require('../../utils/handleError');
const { updateCategory } = require('./services');

const updateCategoryController = async (req, res) => {
  try {
    const request = getValidatedData(req);

    const updatedCategory = await updateCategory({
      id: request.id,
      name: request.name,
      status: request.status,
    });

    res.status(200).json(updatedCategory);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = updateCategoryController;
