const getValidatedData = require('../../utils/getValidatedData');
const { handleError } = require('../../utils/handleError');
const { addCategory } = require('./services');

const createCategory = async (req, res) => {
  try {
    const request = getValidatedData(req);

    const result = await addCategory({
      name: request.name,
      parent: request.parent,
      status: request.status,
    });

    res.status(200).json(result);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = createCategory;
