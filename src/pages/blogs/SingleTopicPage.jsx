import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfilePageLayout from "../../layout/ProfilePageLayout";
import { getData } from "../../api/fetch.api";
import RelatedTopics from "../../components/blogpage/singleTopicPage/RelatedTopics";
import MyTopic from "../../components/blogpage/singleTopicPage/MyTopic";

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
      <RelatedTopics CategoryID={item.CategoryID} />
      <MyTopic item={item} />
    </ProfilePageLayout>
  );
};

export default SingleTopicPage;
