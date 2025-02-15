const handleError = (res = {}, err = {}) => {
  if (process.env.NODE_ENV === "development") {
    console.log(err);
  }
  res.status(err?.code ?? 400).json({
    errors: {
      msg: err.message,
    },
  });
};

module.exports = { handleError };
