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

router.route("/create").post(validateProfileDetails, createProfile);

router
  .route("/update")
  .put(protect, validateMongoId, validateProfileDetails, updateProfile);

router.route("/").get(protect, getProfile);

router.route("/profiles").get(protect, getAllProfiles);
const router = express.Router();
const { createProfile } = require("../controllers/profile");

module.exports = router;
