import React from "react";
import SingleTrending from "./SingleTrending";

const Trending = () => {
  return (
    <div className="grid grid-cols-12 mt-5">
      <h1 className="col-span-12 mb-5 pl-2 border-l-4 border-l-red-500 text-xl">
        Trending Blogs
      </h1>
      <SingleTrending />
      <SingleTrending />
    </div>
  );
};

export default Trending;
