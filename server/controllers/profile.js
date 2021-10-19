const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

// @route POST /profile/create
// @desc Create new profile
// @access Public
exports.createProfile = asyncHandler(async (req, res, next) => {
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

  res.status(201).json({
    profile,
  });
});

// @route PUT /profile
// @desc updates a profile with given ID
// @access Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
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
});

// @route GET /profile
// @desc gets a profile with the given ID
// @access Private
exports.getProfile = asyncHandler(async (req, res, next) => {
  const id = req.user._id;
  const profile = await Profile.findOne({ user: id });

  if (!profile.length) return res.json({ profile });

  res.status(200).json({
    profile,
  });
});

// @route GET /profiles
// @desc gets all profiles
// @access Private
exports.getAllProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find();

  if (!profiles.length) return res.json({ profile });

  res.status(200).json({
    profiles,
  });
});
