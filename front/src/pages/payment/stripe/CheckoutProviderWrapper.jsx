import { use, useEffect, useState } from "react";
import stripe from "./stripe";
import { CheckoutProvider } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import paymentApi from "../../../api/payment";

export default function CheckoutProviderWrapper() {
  const [clientSecret, setClientSecret] = useEffect(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const retreiveStripeClientSecret = async () => {
    setIsLoading(true);
    try {
      const { data: respData } = await paymentApi.createCheckoutSession();
      if (respData) setClientSecret(respData);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    retreiveStripeClientSecret;
  }, []);

  if (isLoading) return <>Loading...</>;

  if (error) return <>There is an error occur while fetching data.</>;

  if (clientSecret) {
    return (
      <CheckoutProvider stripe={stripe} options={{ clientSecret }}>
        <CheckoutForm />
      </CheckoutProvider>
    );
  }

  return null;
}
