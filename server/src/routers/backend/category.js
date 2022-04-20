const express = require("express");
const router = express.Router();

// init
const category = require("../../controller/backend/category");
const verify = require("../../middleware/verify");
const validation = require("../../middleware/validation");
const image = require("../../middleware/multer/image");

// router
router.post(
  "/add-category",
  verify,
  validation("CATEGORY"),
  category.addCategory
);
router.post(
  "/add-catalog",
  verify,
  image.single("image"),
  validation("CATALOG"),
  category.addCatalog
);
router.get("/category", verify, category.getCategory);
router.delete("/catalog/:id", verify, category.deleteCatalog);
router.put(
  "/catalog",
  verify,
  image.single("image"),
  validation("CATALOG"),
  category.updateCatalog
);

router.get("/catalog", verify, category.detailCatalog);

module.exports = router;
