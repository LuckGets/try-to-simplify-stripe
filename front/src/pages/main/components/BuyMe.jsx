import { useNavigate } from "react-router-dom";
import { WEB_PATH } from "../../../constant/path";

export default function BuyMe({ name, price, image }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-500 border-2 border-amber-100 flex justify-center items-center">
      <div className="flex-col gap-3">
        <p className="text-2xl text-red-200">Product name: {name}</p>
        <p className="text-2xl text-emerald-800">Product price: {price}</p>
        <img src={image} />
        <button
          onClick={() => navigate(WEB_PATH.checkout)}
          className="text-2xl bg-green-500 text-white w-full hover:cursor-pointer"
        >
          BUY ME
        </button>
      </div>
    </div>
  );
}
