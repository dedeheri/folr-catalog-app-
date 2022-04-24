const express = require("express");
const router = express.Router();

// init
const gallery = require("../../controller/backend/gallery");
const verify = require("../../middleware/verify");
const validation = require("../../middleware/validation");
const image = require("../../middleware/multer/image");

// router
router.post(
  "/add-gallery",
  verify,
  image.single("image"),
  validation("GALLERY"),
  gallery.addGallery
);

router.get("/gallery", verify, gallery.getGallery);

module.exports = router;
