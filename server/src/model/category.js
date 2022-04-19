const mongoose = require("mongoose");

const category = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authorizations",
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    catalog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "catalogs",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("categorys", category);
