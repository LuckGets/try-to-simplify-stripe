const apiPath = require("../constants/api-path");
const paymentContoller = require("../controller/payment");
const validatorMiddleware = require("../middlewares/validator");
const productSchema = require("../schema/product");

const paymentRouter = require("express").Router();

// Create checkout session
paymentRouter.post(
  apiPath.payments.createPaymentIntent,
  validatorMiddleware([{ schema: productSchema, bodyField: "products" }]),
  paymentContoller.createPaymentIntent
);

module.exports = paymentRouter;
