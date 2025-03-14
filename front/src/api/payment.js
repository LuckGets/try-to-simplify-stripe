import axios from "../configs/axios";

const paymentApi = {
  createCheckoutSession: axios.post("/create-checkout-session"),
};

export default paymentApi;
