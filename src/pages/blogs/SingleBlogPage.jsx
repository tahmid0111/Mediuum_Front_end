import React, { useEffect, useState } from "react";
import ProfilePageLayout from "../../layout/ProfilePageLayout";
import { useParams } from "react-router-dom";
import { getData } from "../../api/common/getData";
import SingleBlog from "../../components/blogpage/singleBlogPage/SingleBlog";

const SingleBlogPage = () => {
  const { blogID } = useParams();
  const [item, setItem] = useState({});

  let fetchData = async () => {
    let res = await getData(
      `http://localhost:8080/blog/api/v1/readSingleBlog/${blogID}`
    );
    console.log(res.data);
    setItem(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [blogID]);
  return (
    <ProfilePageLayout>
      <SingleBlog item={item} TopicDetails={item.TopicDetails} key={item._id} />
    </ProfilePageLayout>
  );
};

export default SingleBlogPage;
