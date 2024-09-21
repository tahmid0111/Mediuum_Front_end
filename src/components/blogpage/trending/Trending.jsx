import React, { useEffect, useState } from "react";
import SingleTrending from "./SingleTrending";
import { getData } from "../../../api/common/getData";

const Trending = () => {
  const [items, setItems] = useState([]);

  let fetchData = async () => {
    let res = await getData(
      `http://localhost:8080/manager/api/v1/readAllTrendingBlog`
    );
    setItems(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-12 mt-5">
      <h1 className="col-span-12 mb-5 pl-2 border-l-4 border-l-red-500 text-xl">
        Trending Blogs
      </h1>

      {items.map((item) => (
        <SingleTrending item={item} key={item._id} />
      ))}
    </div>
  );
};

export default Trending;
