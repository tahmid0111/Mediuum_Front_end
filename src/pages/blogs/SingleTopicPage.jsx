import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfilePageLayout from "../../layout/ProfilePageLayout";
import { getData } from "../../api/common/getData";

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
      
      <h1>{item && item.TopicName}</h1>
    </ProfilePageLayout>
  );
};

export default SingleTopicPage;
