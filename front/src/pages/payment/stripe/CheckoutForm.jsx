import { PaymentElement, useCheckout } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const checkout = useCheckout();

  console.log(checkout);

  return (
    <form>
      <PaymentElement options={{ layout: "accordion" }} />
    </form>
  );
}
