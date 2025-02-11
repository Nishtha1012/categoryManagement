const express = require("express");
const router = require("./routes/index.js");
const connectDB = require("./config/mongo.js");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(router);

app.get("/", (_req, res) => res.send("Category management"));

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
