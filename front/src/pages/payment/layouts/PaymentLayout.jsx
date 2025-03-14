import { Outlet } from "react-router-dom";

export function PaymentLayout() {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
}
