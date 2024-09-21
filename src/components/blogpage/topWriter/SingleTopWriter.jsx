import React from "react";

const SingleTopWriter = (props) => {
  const { UserName, UserImage, UserID, SubTitle } = props.item;
  return (
    <div className="grid grid-cols-12 ml-2">
      <div className="writer-area col-span-12 flex my-1 ml-2">
        <div className="avatar">
          <div className="w-8 h-8 rounded-full mr-2">
            <img src={UserImage} />
          </div>
        </div>
        <div>
          <div className="text-lg font-bold">{UserName}</div>
          <div>
            <span className="text-sm">{SubTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTopWriter;
