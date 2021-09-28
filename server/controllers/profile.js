const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

// @route POST /profile/create
// @desc Create new profile
// @access Public
exports.createProfile = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, gender, birthDate, email, phoneNumber, location, profilePic, description, availability } = req.body;

  try {
    const profile = await Profile.create({
      firstName,
      lastName,
      gender,
      birthDate,
      email,
      phoneNumber,
      location,
      profilePic,
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

// @route PUT /profile/:id
// @desc update a profile with given ID
// @access Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  const  id  = req.user._id;

  const { firstName, 
          lastName, 
          gender,
          birthDate,
          phoneNumber,
          address,
          description } = req.body;
 User.findByIdAndUpdate(id,{
      "firstName": firstName,
      "lastName": lastName,
      "gender": gender,
      "birthDate": birthDate,
      "phoneNumber": phoneNumber,
      "location": address,
      "description": about
  },{new: true}, function(err, user){

      if(err){
          res.status(404);
      }
      else{
          res.json({
            user: {
              id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              gender: user.gender,
              birthDate: user.birthDate,
              email: user.email,
              phoneNumber: user.phoneNumber,
              location: user.location,
              description: user.description
            }
          });
      }

  })
}) 

// @route GET /profile/:id
// @desc update a profile with the given ID and parameters
// @access Private
exports.getProfile = asyncHandler(async (req, res, next) => {
  const id = req.user.id;

  const user = await User.findById({ id });

  User.findById(id, function (err, user) {
  if (err){
      res.status(204);
  }
  else{
      res.status(200).json({
        user: {
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        gender: user.gender,
        location: user.location,
        phoneNumber: user.phoneNumber,
        profilePic: user.profilePic,
        birthDate: user.birthDate,
        description: user.description
        }
      });
  }
})
})

