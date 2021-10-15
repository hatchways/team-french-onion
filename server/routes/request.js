const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getRequests,
  postRequest,
  updateRequest,
  payRequest,
} = require("../controllers/request");

router.route("/").get(getRequests);
router.route("/").post(postRequest);
router.route("/:requestId").patch(updateRequest);
router.route("/:requestId/pay").patch(payRequest);

module.exports = router;
