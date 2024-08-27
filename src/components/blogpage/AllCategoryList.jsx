import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCategoryList = () => {
  const [category, setCategory] = useState([]);
  console.log(category);
  const getCategory = async () => {
    let url = "http://localhost:8080/blog/api/v1/readAllCategory";
    let res = await axios.get(url);
    let data = res.data.data;
    // console.log(data);
    setCategory(data);
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="mx-10 py-5 grid grid-cols-12">
      <div className="col-span-12 mx-auto">
        <ul className="flex">
          {category.map((item, i) => (
            <li key={i} className="px-4 font-bold">
              <Link to={`/blogByCategory/${item._id}`}>
                {item.CategoryName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllCategoryList;
