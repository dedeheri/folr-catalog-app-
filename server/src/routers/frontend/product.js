const express = require("express");
const router = express.Router();

// init
const product = require("../../controller/frontend/product");

// router
router.get("/product/new", product.getNewProduct);
router.get("/products", product.getAllProduct);
router.get("/product", product.getProductByCategory);
router.get("/product/:slug", product.getDetailProduct);
router.get("/history/product", product.getProductByHistory);

module.exports = router;
