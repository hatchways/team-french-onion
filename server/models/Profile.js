const mongoose = require("mongoose");

const timeSchema = new mongoose.Schema({
  day: {
    type: String,
    enum: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    required: true,
  },
  //We may need to define a regex for the time range in the future
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  }
});

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE", "OTHER"],
    required: true,
    default: "MALE",
  },
  birthday: {
    type: Date,
    required: false,
  },
  /*We may need to discard this email path in the future
  as it is also available in the users model. We can simply 
  populate the profile model and retrieve user email*/
  email: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  availability: [timeSchema],
  //we may need to store more images per profile
  //profile pic will be saved in the photos array with 'profilePic' key
  photos: {
    type: [{}],
    default: "",
  },
});
profileSchema.methods.setProflePic = function (imgUrl) {
  this.photos.profilePic = imgUrl;
  this.save();
};

module.exports = Profile = mongoose.model("profile", profileSchema);