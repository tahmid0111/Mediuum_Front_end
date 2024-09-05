import React from "react";
import { FaAlignJustify } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Drawer = () => {
  return (
    <div className="float-right mt-2">
      <div className="drawer drawer-end block md:hidden z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="drawer-button">
            <FaAlignJustify className="text-2xl" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-60 sm:w-80 p-4">
            <li>
              <Link
                className="text-lg font-semibold px-2 py-2"
                to="/guide"
              >
                Beginners guide
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-semibold px-2 py-2"
                to="/faq"
              >
                FAQ
              </Link>
            </li>
            <li className="sm:mr-20">
            <Link
              className="text-lg font-semibold my-2 pl-8 px-10 py-1 border-2 border-black rounded-l-3xl rounded-r-3xl"
              to="/sendEmail/register"
            >
              Create Account
            </Link>
            </li>
            <li className="sm:mr-20">
            <Link
              className="text-lg hover:bg-black bg-black text-white font-semibold pl-20 sm:pl-20 py-2 rounded-l-3xl rounded-r-3xl"
              to="/login"
            >
              Login
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
