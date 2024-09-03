import React, { useState } from "react";
import AvatarBtn from "../profilepage/menu/AvatarBtn";

const WriterMenu = (props) => {
    const [color, setColor] = useState("writerProfile");

    const { Image } = props.items;
    const { onComponentShow } = props;

    const handleClick = (componentName) => {
        setColor(componentName);
        onComponentShow(componentName);
      };

      let myData = {
        linkData: "/profile",
        titleData: "My Profile"
      }
  return (
    <>
    <AvatarBtn image={Image} myData={myData} />
      <div>
        <button
          className={`${
            color === "writerProfile"
              ? "bg-slate-400 hover:bg-slate-400"
              : "bg-slate-200"
          } w-[300px] btn rounded-none text-lg font-bold justify-start pl-10`}
          onClick={() => handleClick("writerProfile")}
        >
          Writer Profile
        </button>
      </div>
      <div>
        <button
          className={`${
            color === "blogs"
              ? "bg-slate-400 hover:bg-slate-400"
              : "bg-slate-200"
          } w-[300px] btn rounded-none text-lg font-bold justify-start pl-10`}
          onClick={() => handleClick("blogs")}
        >
          My Blogs
        </button>
      </div>
      <div>
        <button
          className={`${
            color === "drafts"
              ? "bg-slate-400 hover:bg-slate-400"
              : "bg-slate-200"
          } w-[300px] btn rounded-none text-lg font-bold justify-start pl-10`}
          onClick={() => handleClick("drafts")}
        >
          Drafts
        </button>
      </div>
      <div>
        <button
          className={`${
            color === "followers"
              ? "bg-slate-400 hover:bg-slate-400"
              : "bg-slate-200"
          } w-[300px] btn rounded-none text-lg font-bold justify-start pl-10`}
          onClick={() => handleClick("followers")}
        >
          Followers
        </button>
      </div>
    </>
  );
};

export default WriterMenu;
