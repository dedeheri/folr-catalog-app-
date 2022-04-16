const mongoose = require("mongoose");

const feedbacks = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authorizations",
    },
    expression: {
      type: String,
      trim: true,
    },
    urlFeedback: {
      type: String,
      trim: true,
    },
    feedback: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("feedbacks", feedbacks);
