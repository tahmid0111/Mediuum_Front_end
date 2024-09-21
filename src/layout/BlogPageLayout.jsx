import React from "react";
import BlogHeader from "../components/shared/blogLayout/BlogHeader";
import AllCategoryList from "../components/shared/blogLayout/AllCategoryList";

const BlogPageLayout = (props) => {
  return (
    <>
      <BlogHeader />
      <AllCategoryList />
      {props.children}
    </>
  );
};

export default BlogPageLayout;
