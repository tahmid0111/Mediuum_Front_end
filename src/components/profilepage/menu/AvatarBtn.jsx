import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const AvatarBtn = (props) => {
  return (
    <>
      <div className="avatar">
        <div className="w-[300px] rounded-xl">
          <img src={props.image} />
        </div>
      </div>
      <div>
        <button
          className={`bg-blue-300 hover:bg-blue-400 w-[300px] btn rounded-none group text-lg font-bold justify-start pl-10`}
        >
          Writer Profile <FaAngleRight className="group-hover:pl-1" />
        </button>
      </div>
    </>
  );
};

export default AvatarBtn;
