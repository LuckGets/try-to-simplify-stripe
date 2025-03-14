import { loadStripe } from "@stripe/stripe-js";

const stripe = loadStripe(import.meta.env.STRIPE_PUBLIC_KEY, {
  betas: ["custom_checkout_beta_5"],
});

export default stripe;
