const express = require("express");
const protect = require("../middleware/auth");
const { validateMongoId, validateProfileDetails } = require("../validate");
const router = express.Router();
const {
  updateProfile,
  getProfile,
  getAllProfiles,
  createProfile,
} = require("../controllers/profile");

router.route("/").get(protect, getProfile);

router.route("/create").post(validateProfileDetails, createProfile);

router
  .route("/update")
  .put(protect, validateMongoId, validateProfileDetails, updateProfile);

router.route("/profiles").get(protect, getAllProfiles);

module.exports = router;
