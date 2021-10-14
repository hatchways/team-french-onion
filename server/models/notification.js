const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['Push Notification','Update','Hint','New Site Users'],
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

notificationSchema.methods.toggleReadStatus = function () {
  this.read = !this.read;
};

module.exports = Notification = mongoose.model(
  "Notification",
  notificationSchema
);
