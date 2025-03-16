import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import { ProductWrapper } from "../pages/main/components/ProductWrapper";
import { WEB_PATH } from "../constant/path";
import PaymentForm from "../pages/payment/components/PaymentForm";
import { PaymentLayout } from "../pages/payment/layouts/PaymentLayout";
import PaymentSuccess from "../pages/payment/components/PaymentSuccess";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />}>
          <Route index element={<ProductWrapper />}></Route>
        </Route>
        <Route element={<PaymentLayout />}>
          <Route
            path={`${WEB_PATH.checkout}/:id`}
            element={<PaymentForm />}
          ></Route>
          <Route path={`/payment/success`} element={<PaymentSuccess />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
