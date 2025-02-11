const getValidatedData = (req) => {
  return {
    ...req.validatedData?.query,
    ...req.validatedData?.params,
    ...req.validatedData?.body,
  };
};

module.exports = getValidatedData;
