import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../assets/images/myLogo.png";

const Header = () => {
  const cartList = useSelector((state: any) => state?.cartState?.cartList);
  const [windowWidth, setWindowWidth] = React.useState<number>(0);
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    windowWidth > 768 && setShowMobileMenu(false);
  }, [windowWidth]);

  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Cart",
      path: "/cart",
    },
  ];

  return (
    <nav className="h-[70px] bg-white w-full z-20 border-b border-gray-200  mb-[5rem] mt-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="logo" className="w-10 h-10 mr-2" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            i-Sound
          </span>
        </Link>
        <p className="flex items-center gap-2 text-xl">
          <AiOutlineShoppingCart size={25} color="purple" /> {cartList?.length}
        </p>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className={`inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden ${
            showMobileMenu ? "bg-gray-700" : "bg-white"
          }`}
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {menu?.map((item) => (
              <li key={item?.name}>
                <NavLink
                  to={item?.path}
                  className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent text-xl md:p-0 nav-link"
                  aria-current="page"
                >
                  {item?.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {showMobileMenu && (
          <div className="absolute right-0 top-20 bg-white">
            <ul className="flex">
              {menu?.map((item) => (
                <li
                  key={item?.name}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <NavLink
                    to={item?.path}
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent text-xl md:p-0 nav-link"
                    aria-current="page"
                  >
                    {item?.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
