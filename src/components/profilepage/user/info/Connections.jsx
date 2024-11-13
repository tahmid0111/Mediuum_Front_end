import React from "react";

const Connections = (props) => {
  const { FirstName } = props.items;
  return (
    <div>
      <h1 className="text-3xl font-bold pb-2 border-b-2 border-blue-400">
        Connections
      </h1>
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-6">
          <div className="followers bg-orange-300 p-5 rounded-xl mx-3 my-5">
            <h1 className="text-2xl font-bold mb-5">2.7k Followers</h1>
            <p>followers increased by 20% last month</p>
          </div>
        </div>
        <div className="col-span-6">
        <div className="followings bg-green-300 p-5 rounded-xl mx-3 my-5">
            <h1 className="text-2xl font-bold mb-5">535 Followings</h1>
            <p>most of them are Entrepreneur</p>
          </div>
        </div>
        <div className="col-span-6">
          <div className="notification bg-blue-300 p-5 rounded-xl mx-3 my-5">
            <h1 className="text-2xl font-bold mb-5">Notifications</h1>
            <p>explore 18 upcoming blogs</p>
          </div>
        </div>
        <div className="col-span-6">
        <div className="library bg-gray-300 p-5 rounded-xl mx-3 my-5">
            <h1 className="text-2xl font-bold mb-5">Library</h1>
            <p>18 unread blogs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
