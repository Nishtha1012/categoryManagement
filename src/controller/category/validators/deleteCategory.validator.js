const yup = require("yup");

const deleteCategorySchema = yup.object({
  params: yup.object({
    id: yup.string().required("id is required"),
  }),
});

module.exports = deleteCategorySchema;
