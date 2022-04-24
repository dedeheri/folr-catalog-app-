const mongoose = require("mongoose");

const gallerys = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("gallerys", gallerys);
