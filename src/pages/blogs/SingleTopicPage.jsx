import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfilePageLayout from "../../layout/ProfilePageLayout";
import { getData } from "../../api/fetch.api";
import RelatedTopics from "../../components/blogpage/singleTopicPage/RelatedTopics";
import MyTopic from "../../components/blogpage/singleTopicPage/MyTopic";
import AllBlogs from "../../components/blogpage/singleTopicPage/AllBlogs";

const SingleTopicPage = () => {
  const { topicID } = useParams();
  const [item, setItem] = useState({});

  let fetchData = async () => {
    let res = await getData(
      `http://localhost:8080/blog/api/v1/readSingleTopic/${topicID}`
    );
    setItem(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [topicID]);
  return (
    <ProfilePageLayout>
      <div className="grid grid-cols-12 mx-20">
        <div className="col-span-12 mx-auto my-10">
          <RelatedTopics categoryID={item.CategoryID} topicID={item._id} />
        </div>
        <div className="col-span-12 mx-auto">
          <MyTopic item={item} />
        </div>
        <div className="col-span-12 mx-20 mt-36 mb-20">
          <AllBlogs topicID={item._id} />
        </div>
      </div>
    </ProfilePageLayout>
  );
};

export default SingleTopicPage;
