const express = require("express");
const router = express.Router();

// init
const banner = require("../../controller/backend/banner");
const verify = require("../../middleware/verify");
const validation = require("../../middleware/validation");
const image = require("../../middleware/multer/image");

// router
router.post(
  "/add-banner",
  verify,
  image.single("image"),
  validation("BANNER"),
  banner.addBanner
);

router.get("/banner", verify, banner.getBanner);
router.delete("/banner/:id", verify, banner.deleteBanner);

module.exports = router;
