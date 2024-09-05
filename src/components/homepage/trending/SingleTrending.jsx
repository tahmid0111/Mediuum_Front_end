import React from "react";
import { Link } from "react-router-dom";

const SingleTrending = (props) => {
    const {Image, Title} = props.item;
  return (
    <>
      <div className="col-span-12 xxm:col-span-6 md:col-span-4 lg:col-span-4 bg-gray-700 text-gray-200 rounded-lg mx-4 my-5 xl:my-10">
        <Link>
          <div className="single-blog">
            <img
              src={Image}
              alt=""
              className="w-full"
            />
            <div className="blog-content p-2 xl:p-5">
              <p className="font-bold text-xs sm:text-sm">
                written by <span className="text-blue-500">mr. John Doe</span>
              </p>
              <h1 className="text-base sm:text-xl font-bold pt-2">
                {Title}
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SingleTrending;
