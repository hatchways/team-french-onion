const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");

// @route GET /requests?userid={}
// @desc Search for request of especific userId
// @access Private

exports.getRequests = asyncHandler(async (req, res, next) => {
    const userId = req.query.userid;
    
    let requests;
    if (userId) {
      requests = await Request.find({
        userId: { $regex: userId, $options: "i" }
      });
    }
  
    if (requests.length==0) {
      res.status(404);
      throw new Error("No requests found for this user Id");
    }
  
    res.status(200).json({ requests: requests });
  });

// @route POST /requests/new
// @desc Post a new request 
// @access Private

exports.postRequest = asyncHandler(async (req, res, next) => {
    const { userId, sitterId, start, end, status, paid } = req.body;
    if (end<start){
        res.status(400);
          throw new Error("Invalid request dates");
    };
    const newRequest = await Request.create({
        userId,
        sitterId,
        start,
        end,
        status,
        paid
      });
   

    if (newRequest) {
        res.status(201).json({
            success: {
              newRequest: {
                id: newRequest._id,
              }
            }
          });
        } else {
          res.status(400);
          throw new Error("Invalid request data");
        }
});

// @route PUT /requests/update?requestid={}&status={}
// @desc Update request status
// @access Private

exports.updateRequest = asyncHandler(async (req, res, next) => {
    const requestId = req.query.requestid;
    const status = req.query.status;
    
    let updatedRequest
    if (requestId){
        updatedRequest = await Request.updateOne(
            {_id: requestId }, 
            {$set: {status: status}},{runValidators: true})
    }
    if (updatedRequest){
        res.status(201).json({
            success: {
             message: "Request updated", updatedRequest
            }
          });
    }else{
        res.status(400);
        throw new Error("The request was no updated");
    }
 

    
});