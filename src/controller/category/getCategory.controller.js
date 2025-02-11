const { handleError } = require('../../utils/handleError');
const { getCategories } = require('./services');

const getCategory = async (req, res) => {
  try {
    const categories = await getCategories();

    res.status(200).json(categories);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = getCategory;
