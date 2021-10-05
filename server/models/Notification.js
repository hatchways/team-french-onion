const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  senderEmail: {
      type: String,
      required: true,
      unique: true,
      ref: 'User'
  },
  receipientEmail: {
    type: String,
    required: true,
    unique: true,
    ref: 'User'
  },
  type: {
    type: String,
    required: true,
    enum: ['message', 'request'],
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  read:{
    type: Boolean,
    required: true,
    default: false
  },
}, { timestamps: true});

notificationSchema.methods.toggleReadStatus = function () {
 this.read = !this.read;
 this.save();
};

module.exports = Notification = mongoose.model("notification", notificationSchema);
