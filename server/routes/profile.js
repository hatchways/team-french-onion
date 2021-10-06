const express = require("express");
const protect = require("../middleware/auth");
const upload = require("../middleware/multer");
const { validateMongoId, validateProfileDetails } = require("../validate");
const router = express.Router();
const {
  updateProfile,
  getProfile,
  getAllProfiles,
  uploadProfilePic,
  createProfile
} = require("../controllers/profile");

router.route("/create").post(protect, validateProfileDetails, createProfile);

router
  .route("/update")
  .put(validateMongoId, validateProfileDetails, updateProfile);

router.route("/").get(protect, getProfile);

router.route("/upload").post(upload.single("picture"), uploadProfilePic);

router.route("/profiles").get(protect, getAllProfiles);

module.exports = router;
