import React from "react";
import BlogHeader from "./../components/shared/blogHeader/BlogHeader";
import Footer from "../components/shared/Footer";
import AllCategoryList from "../components/blogpage/AllCategoryList";

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
