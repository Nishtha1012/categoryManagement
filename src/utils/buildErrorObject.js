const buildErrObject = (code, message) => {
  return {
    success: false,
    code: code,
    message,
  };
};

module.exports = { buildErrObject };
