import React from "react";
import Logo from "../common/Logo";
import BlogMenu from "../common/BlogMenu";

const BlogHeader = () => {
  return (
    <div className="bg-yellow-500">
      <div className="grid grid-cols-12 pl-20 pr-10 py-5">
        <div className="col-span-4">
          <Logo />
        </div>
        <div className="col-span-8">
          <BlogMenu />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
