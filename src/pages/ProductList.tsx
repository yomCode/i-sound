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
      description: "Sony wh-Ch510 Wireless Headphones",
      price: 100,
      image: Product1001,
    },
    {
      id: "1002",
      description: "boAt Rockerz 450 Bluetooth On-Ear Headphone",
      price: 200,
      image: Product1002,
    },
    {
      id: "1003",
      description: "boAt Rockerz 450 Bluetooth On-Ear Headphone",
      price: 300,
      image: Product1003,
    },
    {
      id: "1004",
      description: "Sony wh-Ch510 Wireless Headphones",
      price: 400,
      image: Product1004,
    },
    {
      id: "1005",
      description: "Sony wh-Ch510 Wireless Headphones",
      price: 500,
      image: Product1005,
    },
    {
      id: "1006",
      description: "boAt Rockerz 450 Bluetooth On-Ear Headphone",
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
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductList;
