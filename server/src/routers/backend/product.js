const express = require("express");
const product = require("../../controller/backend/product.js");
const image = require("../../middleware/multer/image.js");
const validation = require("../../middleware/validation.js");
const verify = require("../../middleware/verify.js");
const router = express.Router();

router.post(
  "/add-product",
  verify,
  image.array("image", 10),
  validation("PRODUCT"),
  product.addProduct
);
router.get("/product", verify, product.getProduct);
router.delete("/delete-product/:id", verify, product.deleteProduct);
router.get("/product/:id", verify, product.detailProduct);
router.put(
  "/product/:id",
  verify,
  image.array("image", 10),
  validation("UPDATE_PRODUCT"),
  product.updateProduct
);
router.put("/featured-product/:id", product.featuredProduct);

module.exports = router;
