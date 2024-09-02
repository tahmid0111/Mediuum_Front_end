import React, { useEffect, useState } from "react";
import { getData } from "../../../api/common/getData";
import SingleBlog from "./SingleBlog";

const AllBlogs = ({ categoryID }) => {
  const [items, setItems] = useState([]);

  let fetchData = async () => {
    let res = await getData(
      `http://localhost:8080/blog/api/v1/readBlogByCategory/${categoryID}`
    );
    setItems(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [categoryID]);

  return (
    <>
      <SingleBlog items={items} />
    </>
  );
};

export default AllBlogs;
