const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { getRequests, postRequest, updateRequest } = require("../controllers/request");

router.route("/").get(getRequests);
router.route("/").post(postRequest);
router.route("/:requestid").patch(updateRequest);

module.exports = router;
