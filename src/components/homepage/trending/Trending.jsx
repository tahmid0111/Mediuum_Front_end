import React, { useEffect, useState } from "react";
import { getData } from "../../../api/fetch.api";
import { blogURL } from "../../../utility/url.helper";
import SingleTrending from "./SingleTrending";

const Trending = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    let url = `${blogURL}/readAllBlog`;
    const res = await getData(url);
    setItems(res.data);
  };

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className="bg-black px-2 xxs:px-10 xxm:px-2 sm:px-5 pb-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold text-center mb-10 md:mb-20">
        Trending Blogs
      </h1>
      <div className="grid grid-cols-12">
        {items.map((item) => (
          <SingleTrending key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
