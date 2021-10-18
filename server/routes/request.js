const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getRequests,
  postRequest,
  updateRequest,
  payRequest,
} = require("../controllers/request");

router.route("/").get(protect, getRequests);
router.route("/").post(protect, postRequest);
router.route("/:requestId").patch(protect, updateRequest);
router.route("/:requestId/pay").patch(payRequest);

module.exports = router;
