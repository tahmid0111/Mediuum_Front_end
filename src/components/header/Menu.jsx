import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="col-span-8">
      <div className="menu-area mt-4 float-right">
        <ul className="flex">
          <li className="">
            <Link
              className="text-xl font-semibold px-3 py-2"
              to="">
              Beginners guide
            </Link>
          </li>
          <li>
            <Link
              className="text-xl font-semibold px-3 py-2"
              to="">
              FAQ
            </Link>
          </li>
          <li>
            <Link
              className="text-xl font-semibold mx-5 px-5 py-2 border-2 rounded-l-3xl rounded-r-3xl"
              to="">
              Create Account
            </Link>
          </li>
          <li>
            <Link
              className="text-xl bg-black text-white font-semibold mx-5 px-5 py-2 rounded-l-3xl rounded-r-3xl"
              to="">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
