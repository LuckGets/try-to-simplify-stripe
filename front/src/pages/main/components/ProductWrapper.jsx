import BuyMe from "./BuyMe";
import { useFetch } from "../../../hooks/useFetch";
import productsApi from "../../../api/product";

export function ProductWrapper() {
  const { data: axiosProduct, isLoading } = useFetch(
    productsApi.getManyProducts
  );

  const { products } = axiosProduct?.data || [];

  if (isLoading) return <>Loading...</>;

  return (
    <>
      <div className="grid grid-cols-2">
        {products &&
          products.length > 0 &&
          products.map((item) => (
            <BuyMe
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
      </div>
    </>
  );
}
