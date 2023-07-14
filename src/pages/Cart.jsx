import React from "react";
import CartCard from "../components/CartCard";

const Cart = () => {
  return (
    <main className="w-[1200px] min-h-[88vh]">
      <section>
        <p className="text-center font-bold text-[1.5rem]">
          Cart: {0} / ${0}
        </p>

        <div className="">
          {/* {cartList?.map((item) => (
            <CartCard key={item?.id} product={item} />
          ))} */}
        </div>
      </section>
    </main>
  );
};

export default Cart;
