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

module.exports = router;
