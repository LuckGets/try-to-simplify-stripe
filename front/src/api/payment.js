import axios from "../configs/axios";

const paymentApi = {
  createCheckoutSession: axios.post("/create-payment-intent"),
};

export default paymentApi;
