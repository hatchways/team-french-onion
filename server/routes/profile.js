const express = require("express");
const protect = require("../middleware/auth");
const { validateProfileId, validateProfileDetails } = require("../validate");
const router = express.Router();
const {
  updateProfile,
  getProfile,
  getAllProfiles,
} = require("../controllers/profile");

router.route("/create").post(protect, validateProfileDetails, createProfile);

router
  .route("/update")
  .put(protect, validateProfileId, validateProfileDetails, updateProfile);

router.route("/").get(protect, getProfile);

router.route("/profiles").get(protect, getAllProfiles);

module.exports = router;
