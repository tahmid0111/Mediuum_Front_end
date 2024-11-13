import React from "react";

const MyTopic = ({ item }) => {
  return (
    <div>
      <div className="flex my-5">
        <h1 className="text-4xl font-semibold">{item.TopicName}</h1>
        <button className="ml-10 text-white bg-blue-500 font-semibold border-2 border-blue-500 rounded-l-full rounded-r-full px-5">Follow</button>
      </div>
      <div className="flex">
        <p>15.k followers</p>
        <p className="ml-10">100+ blogs</p>
      </div>
    </div>
  );
};

export default MyTopic;
