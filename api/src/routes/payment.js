const apiPath = require("../constants/api-path");
const paymentContoller = require("../controller/payment");

const paymentRouter = require("express").Router();

// Create checkout session
paymentRouter.post(
  apiPath.payment.createCheckoutSession,
  paymentContoller.createCheckoutSession
);

module.exports = paymentRouter;
