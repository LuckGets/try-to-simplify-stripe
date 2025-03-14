const { createLineItems } = require("../services/payment/stripe");
const stripe = require("../stripe");

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {import("express").NextFunction} next
 */
async function createCheckoutSession(req, res, next) {
  const { products } = req.body;

  const allProducts = createLineItems(products);

  return res.status(200).json({ products: allProducts });
}

const paymentContoller = { createCheckoutSession };

module.exports = paymentContoller;
