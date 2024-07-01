import React from "react";
import { Link } from "react-router-dom";
import { FaRegPenToSquare, FaBell, FaBookBookmark  } from "react-icons/fa6";

const BlogMenu = () => {
  return (
    <div className="col-span-8">
      <div className="menu-area mt-4 float-right">
        <ul className="flex">
          <li className="px-5">
            <Link className="" to="/">
              <div className="tooltip" data-tip="write new blog">
                <FaRegPenToSquare className="text-4xl text-white" />
              </div>
            </Link>
          </li>
          <li className="px-5">
            <Link className="" to="/faq">
              <div className="tooltip" data-tip="notification">
                <FaBell className="text-4xl text-white" />
              </div>
            </Link>
          </li>
          <li className="px-5">
            <Link className="" to="/faq">
              <div className="tooltip" data-tip="library">
                <FaBookBookmark className="text-4xl text-white" />
              </div>
            </Link>
          </li>
          <li className="px-5">
            <Link className="" to="/">
              <div className="avatar">
                <div className="w-10 mask mask-squircle">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogMenu;
