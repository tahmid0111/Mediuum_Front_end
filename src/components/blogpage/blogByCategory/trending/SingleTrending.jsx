import React from "react";

const SingleTrending = (props) => {
  const { BlogID, Title, WriterName, WriterImage, TopicName } = props.item;
  return (
    <>
      <h1 className="col-span-12 text-lg font-bold ml-2">{Title}</h1>
      <div className="writer-area col-span-12 flex my-1 ml-2">
        <div className="avatar">
          <div className="w-5 h-5 rounded-full mr-2">
            <img src={WriterImage} />
          </div>
        </div>
        <span className="text-sm">{WriterName}</span>
        <span className="text-sm ml-20 border-1 rounded-full px-2 bg-yellow-100">
          {TopicName}
        </span>
      </div>
    </>
  );
};

export default SingleTrending;
