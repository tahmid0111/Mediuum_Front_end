import React from "react";
import { Link } from "react-router-dom";
import { FaRegPenToSquare, FaBell, FaBookBookmark } from "react-icons/fa6";
import { getEmail } from "../../../helper/otp/otp.helper";

const BlogMenu = () => {
  const email = getEmail();
  return (
    <div className="col-span-8">
      <div className="menu-area mt-4 float-right">
        <ul className="flex">
          <li className="px-5">
            <Link className="" to="/">
              <div className="tooltip" data-tip="write blog">
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
            <Link className="" to={`/profile/${email}`}>
              <div className="avatar">
                <div className="w-10 mask mask-squircle">
                  <img src="/public//medium-logo.png" />
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
