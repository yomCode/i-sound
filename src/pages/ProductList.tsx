import React from "react";
import ProductCard from "../components/ProductCard";
import Product1001 from "../assets/images/1001.png";
import Product1002 from "../assets/images/1002.png";
import Product1003 from "../assets/images/1003.png";
import Product1004 from "../assets/images/1004.png";
import Product1005 from "../assets/images/1005.png";
import Product1006 from "../assets/images/1006.png";

const ProductList = () => {
  const dummyProducts = [
    {
      id: "1001",
      description: "Product 1",
      price: 100,
      image: Product1001,
    },
    {
      id: "1002",
      description: "Product 2",
      price: 200,
      image: Product1002,
    },
    {
      id: "1003",
      description: "Product 3",
      price: 300,
      image: Product1003,
    },
    {
      id: "1004",
      description: "Product 4",
      price: 400,
      image: Product1004,
    },
    {
      id: "1005",
      description: "Product 5",
      price: 500,
      image: Product1005,
    },
    {
      id: "1006",
      description: "Product 5",
      price: 500,
      image: Product1006,
    },
  ];

  return (
    <main className="min-h-[88vh] ">
      <section>
        <div className="flex flex-wrap gap-4">
          {dummyProducts?.map((product) => (
            <ProductCard
              key={product?.id}
              id={product?.id}
              description={product?.description}
              image={product?.image}
              price={product?.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductList;
