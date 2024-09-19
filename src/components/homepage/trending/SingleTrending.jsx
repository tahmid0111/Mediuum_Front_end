import React from "react";
import { Link } from "react-router-dom";

const SingleTrending = (props) => {
    const {Image, Title, UserData} = props.item;
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
              <div className="flex">
              <div className="avatar">
                <div className="w-5 h-5 rounded-full mr-2">
                  <img src={UserData.Image} />
                </div>
              </div>
              <span className="text-sm">{UserData.FullName}</span>
            </div>
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
