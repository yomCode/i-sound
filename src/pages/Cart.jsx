import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";

const Cart = () => {
  const cartList = useSelector((state) => state?.cartState?.cartList);
  const total = useSelector((state) => state?.cartState?.total);

  const sampleProduct = {
    id: 1,
    description: "Apple iPhone 12 Pro Max",
    price: 1099,
    image: "https://i.imgur.com/9QlF1bP.png",
  };
  return (
    <main className="w-[100%] px-[50px] min-h-[88vh]">
      <section>
        <p className="text-center font-bold text-[1.5rem]">
          Cart: {cartList?.length} / ${total}
        </p>

        <div className="w-[100%] px-4">
          {cartList?.map((item) => (
            <CartCard key={item?.id} product={item} />
          ))}
          <CartCard product={sampleProduct} />
        </div>
      </section>
    </main>
  );
};

export default Cart;
