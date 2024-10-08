import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegPenToSquare, FaBell, FaBookBookmark } from "react-icons/fa6";
import { getData } from "../../../api/fetch.api";

const BlogMenu = () => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    let res = await getData(
      `http://localhost:8080/user/api/v1/readUserProfile`
    );
    setData(res.data.Image);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
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
            <Link className="" to="/notification">
              <div className="tooltip" data-tip="notification">
                <FaBell className="text-4xl text-white" />
              </div>
            </Link>
          </li>
          <li className="px-5">
            <Link className="" to="/library">
              <div className="tooltip" data-tip="library">
                <FaBookBookmark className="text-4xl text-white" />
              </div>
            </Link>
          </li>
          <li className="px-5">
            <Link className="" to={`/profile`}>
              <div className="avatar">
                <div className="w-10 mask mask-squircle">
                  {data && <img src={data} />}
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogMenu;
