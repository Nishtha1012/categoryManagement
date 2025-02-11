const express = require("express");

const validateSchema = require("../middlewares/validateSchema");
const { registerUser, loginUser, logoutUser } = require("../controller/auth");
const {
  registerSchema,
  loginSchema,
} = require("../controller/auth/validators");

const router = express.Router();

router.post("/register", validateSchema(registerSchema), registerUser);
router.post("/login", validateSchema(loginSchema), loginUser);
router.post("/logout", logoutUser);

module.exports = router;
