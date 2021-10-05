const Notification = require("../models/Notification");
const asyncHandler = require("express-async-handler");

exports.createNotification = asyncHandler(async (req, res, next) => {
  const { senderEmail, receipientEmail, type, title, description} =
    req.body;

  const notification = await Notification.create({
    type,
    title,
    description,
    receipientEmail,
    senderEmail,
  });

  res.status(201).json({
    success: {
      notification: {
        id: notification._id,
        type: notification.type,
        title: notification.title,
        description: notification.description,
        read: notification.read,
        receipientEmail: notification.receipientEmail,
        senderEmail: notification.senderEmail,
      },
    },
  });
});

exports.markNotificationAsRead = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const notification = await Notification.findById(id);

  if (!natification) {
    res.status(404);
    throw new Error("The notification does not exist");
  }
  notification.toggleReadStatus();

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

  if (!natifications) return res.json({ msg: "No results found" });

  res.status(200).json({
    success: notifications,
  });
});

exports.getUnreadNotifications = asyncHandler(async (req, res, next) => {
  const notifications = await Notification.find({ read: false });

  if (!notification) return res.json({ msg: "No results found" });

  res.status(200).json({
    success: notifications,
  });
});
