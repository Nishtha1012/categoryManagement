const express = require("express");
const {
  getCategory,
  createCategory,
  updateCategoryController,
  deleteCategoryController,
} = require("../controller/category");
const validateSchema = require("../middlewares/validateSchema");
const {
  createCategorySchema,
  updateCategorySchema,
  deleteCategorySchema,
} = require("../controller/category/validators");
const verifyAuthToken = require("../middlewares/verifyAuthToken");

const router = express.Router();

router.use(verifyAuthToken);

router.get("/", getCategory);
router.post("/", validateSchema(createCategorySchema), createCategory);
router.put(
  "/:id",
  validateSchema(updateCategorySchema),
  updateCategoryController
);
router.delete(
  "/:id",
  validateSchema(deleteCategorySchema),
  deleteCategoryController
);

module.exports = router;
