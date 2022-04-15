const express = require("express");
const auth = require("../controller/authorization.js");
const validation = require("../middleware/validation.js");
const verify = require("../middleware/verify.js");

const router = express.Router();

// GET, POST, PUT, DELETE

router.post("/signin", validation("SIGNIN"), auth.signIn);
router.post("/signup", validation("SIGNUP"), auth.signUp);
router.get("/signout", auth.logOut);
router.post("/forget", validation("FORGET"), auth.forget);
router.get("/exp", auth.expToken);
router.post("/reset", validation("RESET"), auth.reset);
router.get("/user", verify, auth.user);

module.exports = router;
