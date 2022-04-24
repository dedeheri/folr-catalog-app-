const express = require("express");
const router = express.Router();

// init
const category = require("../../controller/frontend/category");

// router
router.get("/category", category.getCategory);

module.exports = router;
