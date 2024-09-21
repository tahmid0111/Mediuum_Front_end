import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AvatarBtn = (props) => {
  return (
    <>
      <div className="avatar">
        <div className="w-[300px] rounded-xl">
          <img src={props.image} />
        </div>
      </div>
      <div>
        <Link to={props.myData.linkData}>
          <button
            className={`text-blue-700 bg-slate-200 w-[300px] btn rounded-none group text-lg font-bold justify-start pl-10`}
          >
            {props.myData.titleData} <FaAngleRight className="group-hover:pl-1" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default AvatarBtn;
