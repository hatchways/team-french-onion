const Notification = require("../models/Notification");
const asyncHandler = require("express-async-handler");

exports.createNotification = asyncHandler(async (req, res, next) => {
  const {type, title, description} =
    req.body;

  const notification = await Notification.create({
    type,
    title,
    description,
  });

  res.status(201).json({
    success: {
      notification: {
        id: notification._id,
        type: notification.type,
        title: notification.title,
        description: notification.description,
        read: notification.read,
      },
    },
  });
});

exports.markNotificationAsRead = asyncHandler(async (req, res, next) => {
  const { _id } = req.params;
  const notification = await Notification.findById(_id);

  if (!notification) {
    res.status(404);
    throw new Error("The notification does not exist");
  }
  notification.toggleReadStatus();
  this.save();

  res.status(200).json({
    success: {
      notification: {
        id: notification._id,
        description: notification.description,
        read: notification.read,
      },
    },
  });
});

exports.getAllNotifications = asyncHandler(async (req, res, next) => {
  const notifications = await Notification.find();

  if (!notifications.length) return res.json({ message: "No results found" });

  res.status(200).json({
    success: notifications,
  });
});

exports.getUnreadNotifications = asyncHandler(async (req, res, next) => {
  const notifications = await Notification.find({ read: false });

  if (!notifications.length) return res.json({ message: "No results found" });

  res.status(200).json({
    success: notifications,
  });
});
