const { ValidationError } = require("yup");

const validateSchema = (schema, abortEarly = false) => {
  return async (req, res, next) => {
    try {
      const result = await schema.validate(
        { body: req.body, params: req.params, query: req.query },
        { abortEarly }
      );

      req.validatedData = result;
      next();
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors,
        });
      }
      next(error);
    }
  };
};

module.exports = validateSchema;
