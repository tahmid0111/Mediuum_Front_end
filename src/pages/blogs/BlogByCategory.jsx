
import AllBlogs from "../../components/blogpage/blogByCategory/blogs/AllBlogs";
import TopicsByCategory from "../../components/blogpage/blogByCategory/topics/TopicsByCategory";
import TopWriters from "../../components/blogpage/blogByCategory/topWriter/TopWriters";
import Trending from "../../components/blogpage/blogByCategory/trending/Trending";
import BlogPageLayout from "../../layout/BlogPageLayout";
import { useParams } from "react-router-dom";

const BlogByCategory = () => {
  const { categoryID } = useParams();
  return (
    <BlogPageLayout>
      <div className="mx-10 grid grid-cols-12">
        <div className="col-span-8 mx-16">
          <AllBlogs categoryID={categoryID} />
        </div>
        <div className="col-span-4 mr-10">
          <Trending />
          <TopicsByCategory categoryID={categoryID} />
          <TopWriters categoryID={categoryID} />
        </div>
      </div>
    </BlogPageLayout>
  );
};

export default BlogByCategory;
