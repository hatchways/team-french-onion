const mongoose = require("mongoose");

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
    enum: ['MALE', 'FEMALE', 'OTHER'],
    required: true,
    default: 'MALE'
  },
  birthDate: {
    type: Date,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  availability: [{
    type: Date, 
    required: true
  }],
  profilePic: {
    type: String,
    default: ''
  },
});


module.exports = Profile = mongoose.model("profile", profileSchema);
