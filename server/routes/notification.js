const express = require("express");
const router = express.Router();
const { validateMongoId, validateNotificationDetails } = require("../validate");
const protect = require("../middleware/auth");
const {
  createNotification,
  markNotificationAsRead,
  getAllNotifications,
  getUnreadNotifications,
} = require("../controllers/notification");

router
  .route("/")
  .post(protect, validateNotificationDetails, createNotification);

router.route("/:_id").post(protect, validateMongoId, markNotificationAsRead);

router.route("/").get(protect, getAllNotifications);

router.route("/unread").get(protect, getUnreadNotifications);

module.exports = router;
