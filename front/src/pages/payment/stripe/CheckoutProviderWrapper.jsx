import { useCallback, useEffect, useState } from "react";
import paymentApi from "../../../api/payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripe = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function CheckoutProviderWrapper() {
  const { id } = useParams();
  const [clientSecret, setClientSecret] = useState(null);

  const fetchClientSecret = useCallback(async () => {
    const resp = await paymentApi.createCheckoutSession(Number(id), 1);
    console.log(resp);

    if (resp?.data?.clientSecret) setClientSecret(resp.data.clientSecret);
  }, [id]);

  useEffect(() => {
    fetchClientSecret();
  }, [fetchClientSecret]);

  // const { data, isLoading, isError, error } = useFetch(fetchClientSecret);

  // if (isLoading) return <>Loading...</>;

  // if (isError && error)
  //   return <>There is an error occur while fetching data.</>;

  if (clientSecret) {
    return (
      <Elements stripe={stripe} options={{ clientSecret }}>
        <CheckoutForm />
      </Elements>
    );
  }

  return null;
}
