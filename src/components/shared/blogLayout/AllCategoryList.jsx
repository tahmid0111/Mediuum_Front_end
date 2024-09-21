import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getData } from "../../../api/fetch.api";

const AllCategoryList = () => {
  const [items, setItems] = useState([]);

  let fetchData = async () => {
    let res = await getData(
      "http://localhost:8080/blog/api/v1/readAllCategory"
    );
    setItems(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-10 mb-2 py-4 grid grid-cols-12 border-b-2 border-b-red-200">
      <div className="col-span-12 mx-auto">
        <ul className="flex">
          {items.map((item, i) => (
            <li key={i} className="px-4 font-bold">
              <NavLink
                to={`/blogByCategory/${item._id}`}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-b-red-500 pb-4" : ""
                }
              >
                {item.CategoryName}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllCategoryList;
