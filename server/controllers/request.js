const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");

// @route GET /requests?userid={}
// @desc Search for request of especific userId
// @access Private

exports.getRequests = asyncHandler(async (req, res, next) => {
    const userId = req.query.userid;
    
    let requests
    if (userId) {
      requests = await Request.find({
        userId: userId
      });
    }
  
    res.status(200).json({ requests: requests });
  });

// @route POST /requests/new
// @desc Post a new request 
// @access Private

exports.postRequest = asyncHandler(async (req, res, next) => {
    const { userId, sitterId, start, end, status, paid } = req.body;
    
    const newRequest = await Request.create({
        userId,
        sitterId,
        start,
        end,
        status,
        paid
      });
   

    res.status(201).json({ success: {
      newRequest: {id: newRequest._id,}
      }});

});

// @route PATH /:requestid
// @desc Update request status
// @access Private

exports.updateRequest = asyncHandler(async (req, res, next) => {
    const requestId = req.params.requestid;
    const status = req.body.status;
    
    const updatedRequest = await Request.findOne({_id : requestId});
    updatedRequest.status = status;
   
    await updatedRequest.save();

    res.status(200).json({ success: {
      updatedRequest: updatedRequest
      }});
});