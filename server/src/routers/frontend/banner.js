const express = require("express");
const router = express.Router();

// init
const banner = require("../../controller/frontend/banner");

// router
router.get("/banner", banner.getBanner);

module.exports = router;
