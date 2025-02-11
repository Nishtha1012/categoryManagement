const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inActive"],
    required: true,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
});

CategorySchema.index({ parent: 1 });

module.exports = mongoose.model("Category", CategorySchema);
