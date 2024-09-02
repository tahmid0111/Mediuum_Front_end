import React from "react";
// icons
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa6";

const SingleBlog = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item._id} className="p-1 grid grid-cols-12">
          <div className="col-span-8">
            <div className="flex">
              <div className="avatar">
                <div className="w-4 h-4 rounded-full mr-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <span className="text-sm">john doe</span>
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
              <div className="tooltip flex" data-tip="add to library">
                <button>
                  <FaRegBookmark className="my-1 mr-1" />
                </button>
              </div>
              <p className="text-sm ml-auto">August 13</p>
            </div>
          </div>
          <div className="col-span-4 content-end">
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

export default SingleBlog;
