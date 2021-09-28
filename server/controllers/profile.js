const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

// @route POST /profile/create
// @desc Create new profile
// @access Public
exports.createProfile = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, description, availability } = req.body;

  try {
    const profile = await Profile.create({
      firstName,
      lastName,
      description,
      availability,
    });

    profile.save();
    res.status(200).json({
      profile,
    });
  } catch (err) {
    res.status(400);
    throw new Error("failed to create profile");
  }
});
