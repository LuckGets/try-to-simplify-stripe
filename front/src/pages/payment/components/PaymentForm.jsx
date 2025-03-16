import React from "react";
import CheckoutProviderWrapper from "../stripe/CheckoutProviderWrapper";

export default function PaymentForm() {
  return (
    <div>
      Payment Form
      <CheckoutProviderWrapper />
    </div>
  );
}
