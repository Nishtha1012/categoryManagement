const loginSchema = require("./loginUser.validator");
const registerSchema = require("./registerUser.validator");
const verifyUserSchema = require("./verifyUser.validator");

module.exports = {
  registerSchema,
  loginSchema,
  verifyUserSchema,
};
