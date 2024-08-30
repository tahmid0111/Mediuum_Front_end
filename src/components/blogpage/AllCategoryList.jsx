import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../api/common/getData";

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
    <div className="mx-10 py-5 grid grid-cols-12">
      <div className="col-span-12 mx-auto">
        <ul className="flex">
          {items.map((item, i) => (
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
