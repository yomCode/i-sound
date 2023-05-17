import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const ProductList = lazy(() => import("../pages/ProductList"));
const Cart = lazy(() => import("../pages/Cart"));

const AllRoutes = () => {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
