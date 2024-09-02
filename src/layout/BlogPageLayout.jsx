import React from "react";
import BlogHeader from "../components/shared/blogLayout/blogHeader/BlogHeader";
import AllCategoryList from "../components/shared/blogLayout/categoryList/AllCategoryList";

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
