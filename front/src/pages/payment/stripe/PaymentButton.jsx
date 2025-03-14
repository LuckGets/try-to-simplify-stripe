import { useCheckout } from "@stripe/react-stripe-js";
import { useState } from "react";

export default function PaymentButton() {
  const [isLoading, setIsLoading] = useState(false);
  const { confirm } = useCheckout();

  function handleClick() {
    try {
      setIsLoading(true);
      confirm();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <button disabled={isLoading} onClick={handleClick}>
        Pay
      </button>
    </div>
  );
}
