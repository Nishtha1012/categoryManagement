const yup = require("yup");

const registerSchema = yup.object({
  body: yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  }),
});

module.exports = registerSchema;
