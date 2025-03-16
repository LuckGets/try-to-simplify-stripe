import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    if (countDown > 0) {
      const intervalId = setInterval(() => {
        setCountDown((prev) => --prev);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    } else {
      navigate("/");
    }
  }, [countDown, navigate]);

  return (
    <div className="p-10 bg-green-500 h-screen flex justify-center items-center">
      <div>
        <h1 className="text-9xl text-white">PAYMENT SUCCESS!</h1>
        <p className="text-white">
          Will redirect you back to home page in {countDown}
        </p>
      </div>
    </div>
  );
}
