const mongoose = require("mongoose");

const authorizations = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    refreshToken: {
      type: String,
      default: null,
      trim: true,
    },
    activation: {
      type: Boolean,
      trim: true,
      default: false,
    },
    role: {
      type: Number,
      default: 1,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("authorizations", authorizations);
