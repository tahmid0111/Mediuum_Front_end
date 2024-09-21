import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import { getData } from "../../../../api/fetch.api";
import { blogURL } from "../../../../utility/url.helper";

const AllBlogs = ({ categoryID }) => {
  const [items, setItems] = useState([]);

  let fetchData = async () => {
    let url = `${blogURL}/readBlogByCategory/${categoryID}`
    let res = await getData(url);
    setItems(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [categoryID]);

  return (
    <>
      {items.map((item) => (
        <SingleBlog item={item} key={item._id} />
      ))}
    </>
  );
};

export default AllBlogs;
