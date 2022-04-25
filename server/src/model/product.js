const mongoose = require("mongoose");

const product = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authorizations",
    },
    image: {
      type: Array,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    discount: {
      type: Number,
      default: null,
      trim: true,
    },
    featuredProduct: {
      type: Boolean,
      default: false,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    oldPrice: {
      type: Number,
      default: null,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    productInfo: {
      type: Object,
      category: {
        type: String,
        required: true,
        trim: true,
      },
      catalog: { type: String, required: true, trim: true },
      dimensions: {
        type: Object,
        lengthy: {
          type: String,
          required: true,
          trim: true,
        },
        width: {
          type: String,
          required: true,
          trim: true,
        },
        height: {
          type: String,
          required: true,
          trim: true,
        },
      },
      material: {
        type: String,
        required: true,
        trim: true,
      },
      weight: {
        type: String,
        required: true,
        trim: true,
      },
    },
    link: {
      type: Object,
      shopee: {
        type: String,
        required: true,
        trim: true,
      },
      tokopedia: { type: String, required: true, trim: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", product);
