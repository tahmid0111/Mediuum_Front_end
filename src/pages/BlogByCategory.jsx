import { useEffect, useState } from "react";
import BlogPageLayout from "../layout/BlogPageLayout";
import { useParams } from "react-router-dom";
import Trending from "../components/blogpage/Trending";
import TopicsByCategory from "../components/blogpage/TopicsByCategory";
import TopWriters from "../components/blogpage/TopWriters";

const BlogByCategory = () => {
  const { categoryID } = useParams();
  const [blog, setBlog] = useState([]);
  const getBlogByCategory = async () => {
    fetch(`http://localhost:8080/blog/api/v1/readBlogByCategory/${categoryID}`)
      .then((res) => res.json())
      .then((data) => setBlog(data.data));
  };
  useEffect(() => {
    getBlogByCategory();
  }, []);
  return (
    <BlogPageLayout>
      <div className="mx-10 grid grid-cols-12">
        <div className="col-span-8">
          {blog.map((item) => (
            <div key={item._id}>
              <div className="poet-area">
                {/* 
                    poet image
                    poet name

                    published date 
                */}
              </div>
              <div className="blog-area">
                {/* 
                    blog title
                    blog image
                */}
              </div>
              <div className="blog-details">
                {/* 
                    blog topic
                    reading time

                    like button
                    add to library option
                */}
              </div>
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
        <div className="col-span-4">
          <Trending />
          <TopicsByCategory categoryID={categoryID} />
          <TopWriters categoryID={categoryID} />
        </div>
      </div>
    </BlogPageLayout>
  );
};

export default BlogByCategory;
