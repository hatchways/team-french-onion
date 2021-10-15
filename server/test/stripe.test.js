const stripe = require("stripe")("sk_test_Hrs6SAopgFPF0bZXSN3f6ELN");

const start = async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "usd",
    payment_method_types: ["card"],
    receipt_email: "jenny.rosen@example.com",
  });
  console.log(paymentIntent);
};

start();
