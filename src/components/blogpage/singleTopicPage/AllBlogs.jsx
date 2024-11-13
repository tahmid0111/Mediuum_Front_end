import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import { blogURL } from "../../../utility/url.helper";
import { getData } from "../../../api/fetch.api";

const AllBlogs = ({ topicID }) => {
  const [items, setItems] = useState([]);

  let fetchData = async () => {
    let url = `${blogURL}/readBlogByTopic/${topicID}`;
    let res = await getData(url);
    setItems(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [topicID]);
  return (
    <div className="">
      <h1>Recommended Blogs</h1>
      <div className="grid grid-cols-12">
        {items.map((item) => (
          <SingleBlog item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
