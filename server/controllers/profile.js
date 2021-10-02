const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

// @route POST /profile/create
// @desc Create new profile
// @access Public
exports.createProfile = asyncHandler(async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      gender,
      birthday,
      email,
      phoneNumber,
      location,
      profilePic,
      description,
      availability,
    } = req.body;
    const profile = await Profile.create({
      firstName,
      lastName,
      gender,
      birthday,
      email,
      phoneNumber,
      location,
      profilePic,
      description,
      availability,
    });

    res.status(200).json({
      profile,
    });
  } catch (err) {
    res.status(400);
    throw new Error("Something went wrong, please try again");
  }
});

// @route PUT /profile
// @desc update a profile with given ID
// @access Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  try {
    const id = req.user._id;

    const {
      firstName,
      lastName,
      gender,
      birthday,
      email,
      phoneNumber,
      location,
      profilePic,
      description,
      availability,
    } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user: id },
      {
        firstName,
        lastName,
        gender,
        birthday,
        email,
        phoneNumber,
        location,
        profilePic,
        description,
        availability,
      },
      { new: true }
    );
    res.status(200).json({
      profile,
    });
  } catch (err) {
    res.status(400);
    throw new Error("Something went wrong, please try again");
  }
});

// @route GET /profile
// @desc gets a profile with the given ID
// @access Private
exports.getProfile = asyncHandler(async (req, res, next) => {
  try {
    const id = req.user._id;
    const profile = await Profile.findOne({ user: id });
    res.status(200).json({
      profile,
    });
  } catch (err) {
    res.status(400);
    throw new Error("Something went wrong, please try again");
  }
});

// @route GET /profile
// @desc get all profiles
// @access Private
exports.getAllProfiles = asyncHandler(async (req, res, next) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json({
      profiles,
    });
  } catch (err) {
    res.status(400);
    throw new Error("Something went wrong, please try again");
  }
});
