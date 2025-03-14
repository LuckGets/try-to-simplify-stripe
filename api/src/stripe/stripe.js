const Stripe = require("stripe");

module.exports = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-02-24.acacia; custom_checkout_beta=v1",
});
