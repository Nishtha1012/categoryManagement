const yup = require("yup");

const createCategorySchema = yup.object({
  body: yup.object({
    name: yup.string().required("Name is required"),
    status: yup
      .mixed()
      .oneOf(["active", "inActive"], "Invalid status")
      .required("Status is required"),
    parent: yup.string().nullable(),
  }),
});

module.exports = createCategorySchema;
