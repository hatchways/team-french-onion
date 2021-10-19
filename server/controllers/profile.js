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

  if (!profile) {
    res.status(404);
    throw new Error("The profile does not exist");
  }

  res.status(200).json({
    profile,
  });
});

// @route GET /profiles
// @desc gets all profiles
// @access Private
exports.getAllProfiles = asyncHandler(async (req, res, next) => {
  const { search, start, end } = req.query;

  if (!search || !start || !end) {
    const profiles = await Profile.find({
      location: { $regex: search, $options: "i" },
      isSitter: true,
    });

    //TODO: Need to check dates to be valid
    res.status(200).json({
      profiles,
    });
    return;
  }

  const profiles = await Profile.find();

  res.status(200).json({
    profiles,
  });
});
