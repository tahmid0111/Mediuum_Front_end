import React, { useEffect, useState } from "react";
import { getData } from "../../api/common/getData";

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
    <div className="mt-4">
      {items.map((item) => (
        <div key={item._id} className="p-1 grid-cols-12">
          <div className="col-span-12">
            <h1 className="blog-title text-2xl font-bold">{item.Title}</h1>
          </div>
          <div className="col-span-12">
            <div className="flex">
              <div className="avatar">
                <div className="w-5 h-5 rounded-full mr-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <span>john doe</span>
            </div>
            <div>
              <h1>dfwfwefwefw</h1>
            </div>
          </div>
          <div className="col-span-4">
            <img
              src="/public/ai-generated-8846756_1920.jpg"
              alt=""
              className="w-48 float-right"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;
