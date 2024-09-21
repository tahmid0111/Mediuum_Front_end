import React from "react";
import moment from "moment";
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa6";

const SingleBlog = (props) => {
  const {
    Title,
    createdAt,
    Image,
    Saved,
    Content,
    LoveReact,
    Comment,
    UserID,
    TopicDetails,
    UserData,
  } = props.item;

  const formattedDate = moment(createdAt).format(`Do MMMM, YYYY`);
  return (
    <div className="mx-36 grid grid-cols-12">
      <div className="col-span-12 mt-10 mb-2">
        <div className="flex font-semibold">
          <p>{formattedDate}</p>
          <p className="ml-10 border-1 rounded-full px-4 bg-green-100">
            {TopicDetails && TopicDetails.TopicName}
          </p>
        </div>
      </div>
      <div className="col-span-12">
        <h1 className="text-5xl font-semibold pb-10">{Title}</h1>
        <div className="flex">
          <div className="avatar">
            <div className="w-8 h-8 rounded-full mr-2">
              <img src={UserData && UserData.Image} />
            </div>
          </div>
          <div className="text-lg font-semibold">
            {UserData && UserData.FullName}
            <div>
              <span className="text-sm">{UserData && UserData.SubTitle}</span>
            </div>
          </div>
          <button className="ml-10 h-8 text-blue-500 font-semibold border-2 border-blue-500 rounded-l-full rounded-r-full px-5">
            Follow
          </button>
          <div className="flex ml-20">
            <div className="tooltip flex" data-tip="1.5k likes">
              <FaRegHeart className="my-1 mr-1 text-2xl" />
              <p className="mr-10 text-lg">1.5k</p>
            </div>
            <div className="tooltip flex" data-tip="546 comments">
              <FaRegComment className="my-1 mr-1 text-2xl" />
              <p className="mr-10 text-lg">546</p>
            </div>
            <button className="h-4">
              {Saved ? (
                <FaBookmark className="my-1 mr-1 text-2xl text-yellow-500" />
              ) : (
                <FaRegBookmark className="my-1 mr-1 text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 mt-10">
        <img src={Image} alt="" className="w-full mx-auto" />
      </div>
      <div className="col-span-12 mt-10">
        <p>{Content}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
