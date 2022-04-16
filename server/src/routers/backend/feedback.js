const express = require("express");
const router = express.Router();

// init
const feedback = require("../../controller/backend/feedback");
const verify = require("../../middleware/verify");
const validation = require("../../middleware/validation");

// router
router.post(
  "/add-feedback",
  verify,
  validation("FEEDBACK"),
  feedback.addFeedBack
);

module.exports = router;
