import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu-area mt-3 lg:mt-4 float-right hidden md:block">
        <ul className="flex">
          <li>
            <Link
              className="text-lg lg:text-xl font-semibold px-2 xl:px-3 py-2"
              to="/guide"
            >
              Beginners guide
            </Link>
          </li>
          <li>
            <Link
              className="text-lg lg:text-xl font-semibold px-2 xl:px-3 py-2"
              to="/faq"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              className="text-lg lg:text-xl font-semibold mx-1 lg:mx-3 xl:mx-5 px-3 lg:px-5 py-1 lg:py-2 border-2 rounded-l-3xl rounded-r-3xl"
              to="/sendEmail/register"
            >
              Create Account
            </Link>
          </li>
          <li>
            <Link
              className="text-lg lg:text-xl bg-black text-white font-semibold mx-1 lg:mx-3 xl:mx-5 px-3 lg:px-5 py-1 lg:py-2 rounded-l-3xl rounded-r-3xl"
              to="/login"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
