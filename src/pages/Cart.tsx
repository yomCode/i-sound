import React from "react";
import { useCart } from "../contexts/CartContext";
import CartCard from "../components/CartCard";
import Product1001 from "../assets/images/1001.png";
import Product1002 from "../assets/images/1002.png";
import Product1003 from "../assets/images/1003.png";
import Product1004 from "../assets/images/1004.png";

const Cart = () => {
  const { total } = useCart();
  const dummyCartItems = [
    {
      id: "1001",
      price: 149,
      image: Product1001,
      description: "Sony wh-Ch510 Wireless Headphones",
    },
    {
      id: "1002",
      price: 49,
      image: Product1002,
      description: "boAt Rockerz 450 Bluetooth On-Ear Headphone",
    },
    {
      id: "1003",
      price: 49,
      image: Product1003,
      description: "boAt Rockerz 450 Bluetooth On-Ear Headphone",
    },
    {
      id: "1004",
      price: 49,
      image: Product1004,
      description: "boAt Rockerz 450 Bluetooth On-Ear Headphone",
    },
  ];

  return (
    <main className="w-[1200px] min-h-[88vh]">
      <section>
        <p className="text-center font-bold text-[1.5rem]">
          Cart: 2 / ${total}
        </p>

        <div className="">
          {dummyCartItems?.map((item) => (
            <CartCard
              id={item?.id}
              price={item?.price}
              image={item?.image}
              description={item?.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Cart;
