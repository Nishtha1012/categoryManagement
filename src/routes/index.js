const express = require("express");
const authRouter = require("./auth.js");
const categoryRouter = require("./category.js");

const router = express.Router();

router.get("/", (_req, res) => res.send("Category management"));

router.use("/api/auth", authRouter);
router.use("/api/category", categoryRouter);

router.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

module.exports = router;
