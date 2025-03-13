import BuyMe from "./BuyMe";

const products = [
  {
    id: "1",
    name: "1",
    price: 100,
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: "2",
    name: "2",
    price: 4000,
    image: "https://picsum.photos/id/100/200/300",
  },
];

export function ProductWrapper() {
  return (
    <>
      <div className="grid grid-cols-2">
        {products.map((item) => (
          <BuyMe image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </>
  );
}
