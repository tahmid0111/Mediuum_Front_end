import React from "react";
import Logo from "../header/Logo";
import BlogMenu from "../blogLayout/blogHeader/BlogMenu";

const ProfileHeader = () => {
  return (
    <div className="bg-yellow-500">
      <div className="grid grid-cols-12 pl-20 pr-10 py-5">
        <Logo />
        <BlogMenu />
      </div>
    </div>
  );
};

export default ProfileHeader;
