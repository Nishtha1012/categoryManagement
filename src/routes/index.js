const express = require("express");
const authRouter = require("./auth.js");
const categoryRouter = require("./category.js");

const router = express.Router();

router.use("/api/auth", authRouter);
router.use("/api/category", categoryRouter);

router.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = router;
