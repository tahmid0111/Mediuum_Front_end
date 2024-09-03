import React, { useState } from "react";

import LogoutBtn from "./LogoutBtn";
import AvatarBtn from "./AvatarBtn";

const ProfileMenu = (props) => {
  const [color, setColor] = useState("myProfile");

  const { Image } = props.items;
  const { onComponentShow } = props;

  const handleClick = (componentName) => {
    setColor(componentName);
    onComponentShow(componentName);
  };
  let myData = {
    linkData: "/writerProfile",
    titleData: "Writer Profile"
  }
  return (
    <>
      <AvatarBtn image={Image} myData= {myData} />
      {/* // main three buttons ================= */}
      <div>
        <button
          className={`${
            color === "myProfile" ? "bg-slate-400 hover:bg-slate-400" : "bg-slate-200"
          } w-[300px] btn rounded-none text-lg font-bold justify-start pl-10`}
          onClick={() => handleClick("myProfile")}
        >
          My Profile
        </button>
      </div>
      <div>
        <button
          className={`${
            color === "connections" ? "bg-slate-400 hover:bg-slate-400" : "bg-slate-200"
          } w-[300px] btn rounded-none text-lg font-bold justify-start pl-10`}
          onClick={() => handleClick("connections")}
        >
          Connections
        </button>
      </div>
      <div>
        <button
          className={`${
            color === "password" ? "bg-slate-400 hover:bg-slate-400" : "bg-slate-200"
          } w-[300px] btn rounded-none text-lg font-bold justify-start pl-10`}
          onClick={() => handleClick("password")}
        >
          Password and Security
        </button>
      </div>
      {/* // Log out btn added */}
      <LogoutBtn />
    </>
  );
};

export default ProfileMenu;
