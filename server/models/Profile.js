const mongoose = require("mongoose");

const timeSchema = new mongoose.Schema({
  day: {
    type: String,
    enum: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    required: true,
  },
  //a regex will be defined for the time range
  timeRange: {
    type: String,
    required: true,
  },
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
  email: {
    type: String,
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
  profilePic: {
    type: String,
    default: "",
  },
});

module.exports = Profile = mongoose.model("profile", profileSchema);
