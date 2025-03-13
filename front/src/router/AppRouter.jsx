import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import { ProductWrapper } from "../pages/main/components/ProductWrapper";
import { WEB_PATH } from "../constant/path";
import PaymentForm from "../pages/payment/components/PaymentForm";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />}>
          <Route index element={<ProductWrapper />}></Route>
          <Route path={WEB_PATH.checkout} element={<PaymentForm />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
