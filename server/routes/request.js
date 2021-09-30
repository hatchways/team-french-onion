const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { getRequests, postRequest, updateRequest } = require("../controllers/request");

router.route("/").get(protect, getRequests);
router.route("/new").post(protect, postRequest);
router.route("/update").put(protect, updateRequest);

module.exports = router;
