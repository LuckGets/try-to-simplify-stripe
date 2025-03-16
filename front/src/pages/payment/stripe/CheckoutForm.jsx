import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitPayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;
    let isActive = true;

    try {
      if (!isActive) return;
      setIsLoading(true);

      const paymentResult = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:5173/payment/success",
        },
      });

      if (paymentResult.error) {
        console.error(paymentResult.error);
      }
    } catch (err) {
    } finally {
      if (isActive) setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitPayment}>
      <div className="grid gap-3">
        <PaymentElement options={{ layout: "accordion" }} />
        <button
          type="submit"
          className="text-white p-2 bg-blue-600 cursor-pointer"
          disabled={!stripe || isLoading}
        >
          {isLoading ? "Loading..." : "Submit Payment"}
        </button>
      </div>
    </form>
  );
}
