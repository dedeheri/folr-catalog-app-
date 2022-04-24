const mongoose = require("mongoose");

const banners = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
      trim: true,
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
