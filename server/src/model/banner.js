const mongoose = require("mongoose");

const banners = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
      trim: true,
    },
    sorted: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("banners", banners);
