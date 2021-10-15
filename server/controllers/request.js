const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// @route GET /requests
// @desc Search for request of especific userId
// @access Private

exports.getRequests = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const requests = await Request.find({ userId: userId });
  res.status(200).json({ requests: requests });
});

// @route POST /requests
// @desc Post a new request
// @access Private

exports.postRequest = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const { sitterId, start, end, status, paid } = req.body;

  const newRequest = await Request.create({
    userId,
    sitterId,
    start,
    end,
    status,
    paid,
  });

  res.status(201).json({
    success: {
      newRequest: { id: newRequest._id },
    },
  });
});

// @route PATH /requests/:requestId
// @desc Update request status
// @access Private

exports.updateRequest = asyncHandler(async (req, res, next) => {
  const requestId = req.params.requestId;
  const status = req.body.status;
  const userId = req.user.id;

  const updatedRequest = await Request.findOne({ _id: requestId });
  if (updatedRequest.userId === sitterId) {
    updatedRequest.status = status;
    await updatedRequest.save();
    res.status(200).json({
      success: {
        updatedRequest: updatedRequest,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid user Id data");
  }
});

// @route PATH /requests/:requestId/pay
// @desc Update pay status
// @access Private

exports.payRequest = asyncHandler(async (req, res, next) => {
  const requestId = req.params.requestId;
  const request = await Request.findOne({ _id: requestId });
  const { items } = req.body;

  const todayDate = new Date();

  if (todayDate > request.end) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "cad",
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(400);
    throw new Error("Current date has to be after end date of request to pay.");
  }

  const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };
});
