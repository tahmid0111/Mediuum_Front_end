import React, { useState } from "react";
import { motion } from "framer-motion";
// icons
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa6";
import { getData } from "../../../api/common/getData";
import { blogURL } from "../../../helper/URL/URLHelper";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const SingleBlog = ({ items }) => {
  console.log(items);
  // const [color, setColor] = useState(false);
  const navigate = useNavigate();
  const handleLibrary = async (blogID) => {
    setColor(true);
    let url = `${blogURL}/addToLibrary/${blogID}`;
    let res = await getData(url);
    if (res.status !== "success") {
      toast("couldn't add to library");
    }
  };
  return (
    <div>
      {items.map((item) => (
        <div key={item._id} className="p-1 grid grid-cols-12">
          <div className="col-span-8">
            <Toaster />
            <div className="flex">
              <div className="avatar">
                <div className="w-5 h-5 rounded-full mr-2">
                  <img src={item.UserData.Image} />
                </div>
              </div>
              <span className="text-sm">{item.UserData.FullName}</span>
            </div>
            <h1 className="blog-title text-2xl font-bold pb-4">{item.Title}</h1>
            <div className="flex">
              <div className="tooltip flex" data-tip="1.5k likes">
                <FaRegHeart className="my-1 mr-1" />
                <p className="mr-5">1.5k</p>
              </div>
              <div className="tooltip flex" data-tip="546 comments">
                <FaRegComment className="my-1 mr-1" />
                <p className="mr-5">546</p>
              </div>
              {/* <div
                className="tooltip flex"
                data-tip={`${color ? "saved" : "add to library"}`}
              >
                <button className="" onClick={() => handleLibrary(item._id)}>
                  {color ? (
                    <FaBookmark className="my-1 mr-1 text-yellow-500" />
                  ) : (
                    <FaRegBookmark className="my-1 mr-1" />
                  )}
                </button>
              </div> */}
              <div className="tooltip flex" data-tip="add to library">
                <motion.button
                  whileTap={{ scale: 0.1 }}
                  onClick={() => handleLibrary(item._id)}
                >
                  <FaRegBookmark className="my-1 mr-1" />
                </motion.button>
              </div>
              <p className="text-sm ml-auto">August 13</p>
            </div>
          </div>
          <div className="col-span-4">
            <div className="avatar float-right">
              <div className="w-[200px] h-[120px] rounded-md">
                <img src={item.Image} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleBlog;
