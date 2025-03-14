const validatorMiddleware = require("../middlewares/validator");
const productSchema = require("../schema/product");
const { createLineItems } = require("../services/payment/stripe");
const stripe = require("../stripe");
const { createError } = require("../utils/createError");
const { validator } = require("../utils/validator");

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {import("express").NextFunction} next
 */
function createCheckoutSession(req, res, next) {
  const { products } = req.body;

  const allProducts = createLineItems(products);

  return res.status(200).json({ products: allProducts });
}

const paymentContoller = { createCheckoutSession };

module.exports = paymentContoller;
