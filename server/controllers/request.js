const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");

// @route GET /requests?userid=
// @desc Search for request of especific userId
// @access Private

exports.getRequests = asyncHandler(async (req, res, next) => {
    const userId = req.query.userId;
  
    let requests;
    if (userId) {
      requests = await Request.find({
        userId: userId
      });
    }
  
    if (!requests) {
      res.status(404);
      throw new Error("No requests found for this user Id");
    }
  
    res.status(200).json({ users: users });
  });
  