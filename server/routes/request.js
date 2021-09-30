const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { getRequests, postRequest, updateRequest } = require("../controllers/request");

router.route("/").get(getRequests);
router.route("/new").post(postRequest);
router.route("/update").put(updateRequest);

module.exports = router;
