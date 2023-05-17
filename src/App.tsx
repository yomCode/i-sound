import React, { lazy } from "react";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const AllRoutes = lazy(() => import("./routes/AllRoutes"));

const App = () => {
  return (
    <div className="min-h-[88vh] max-w-[1200px] flex flex-col justify-center items-center mx-auto">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
