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
  .route("/create")
  .post(validateNotificationDetails, createNotification);

router.route("/check/:_id").post(validateMongoId, markNotificationAsRead);

router.route("/all").get(protect, getAllNotifications);

router.route("/unread").get(protect, getUnreadNotifications);

module.exports = router;
