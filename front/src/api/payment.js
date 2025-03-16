import axios from "../configs/axios";

/**
 *
 * @param {string} endpoint
 * @returns {string} url
 */
function formatPaymentEndpoint(endpoint) {
  return `/payments${endpoint}`;
}

const paymentApi = {
  createCheckoutSession: function (productId, amount) {
    return axios.post(formatPaymentEndpoint("/create-payment-intent"), {
      products: [{ productId, amount }],
    });
  },
};

export default paymentApi;
