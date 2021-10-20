const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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
  const userId = req.body.id;
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

// @route PATCH /requests/:requestId/pay
// @desc Update pay status
// @access Private

exports.payRequest = asyncHandler(async (req, res, next) => {
  const requestId = req.params.requestId;
  const request = await Request.findById(requestId);
  const { items } = req.body;
  const todayDate = new Date();

  /*
  const YOUR_DOMAIN = "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        price: "{{PRICE_ID}}",
        quantity: 1,
      },
    ],

    payment_method_types: ["card", "acss_debit"],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);*/

  const calculateOrderAmount = (items) => {
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    // TODO: Add something like following code to get line items
    //from frontend once integrated
    //Object.entries(items).forEach((entry) => {
    //  const [key, value] = entry;
    //});
    return 1400;
  };

  if (todayDate > request.end && !request.paid) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "cad",
    });

    const updatedRequest = await Request.findByIdAndUpdate(
      requestId,
      { $set: { paid: true } },
      { new: true }
    );

    res.send({
      success: updatedRequest,
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(400);
    throw new Error(
      "Current date has to be after end date of request to pay and/or request has to be unpaid."
    );
  }
});
