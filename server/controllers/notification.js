const Notification = require("../models/Notification");
const asyncHandler = require("express-async-handler");

exports.createNotification = asyncHandler(async (req, res, next) => {
  const { type, title, description } = req.body;

  const notification = await Notification.create({
    type,
    title,
    description,
  });

  res.status(201).json({
    message: {
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

  if (!notification.length) return res.json({ message: notification });

  notification.toggleReadStatus();
  this.save();

  res.status(200).json({
    message: {
      notification: {
        id: notification._id,
        description: notification.description,
        read: notification.read,
      },
    },
  });
});

exports.getAllNotifications = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  const notifications = await Notification.find({user: _id});

  if (!notifications.length) return res.json({ message: notifications });

  res.status(200).json({
    message: notifications,
  });
});

exports.getUnreadNotifications = asyncHandler(async (req, res, next) => {
  const notifications = await Notification.find({ read: false });

  if (!notifications.length) return res.json({ message: notifications });

  res.status(200).json({
    message: notifications,
  });
});
