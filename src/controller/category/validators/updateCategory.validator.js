const yup = require('yup');

const updateCategorySchema = yup.object({
  params: yup.object({
    id: yup.string().required('id is required'),
  }),
  body: yup.object({
    name: yup.string().required('Name is required'),
    status: yup
      .mixed()
      .oneOf(['active', 'inActive'], 'Invalid status')
      .required('Status is required'),
  }),
});

module.exports = updateCategorySchema;
