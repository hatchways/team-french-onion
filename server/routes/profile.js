const express = require("express");
const router = express.Router();
const { createProfile } = require("../controllers/profile");

router.route("/create").post(createProfile);

module.exports = router;
