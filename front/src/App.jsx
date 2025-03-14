import "./App.css";
import AppRouter from "./router/AppRouter";
import { CheckoutProvider } from "@stripe/react-stripe-js";

function App() {
  return (
    <CheckoutProvider>
      <AppRouter />
    </CheckoutProvider>
  );
}

export default App;
