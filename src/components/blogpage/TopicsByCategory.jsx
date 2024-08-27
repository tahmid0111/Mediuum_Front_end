import React, { useEffect, useState } from "react";

const TopicsByCategory = ({ categoryID }) => {
  const [topic, setTopic] = useState([]);
  console.log(topic)
  const getTopicsByCategory = async () => {
    console.log(categoryID);
    fetch(
      `http://localhost:8080/blog/api/v1/readAllTopicByCategory/${categoryID}`
    )
      .then((res) => res.json())
      .then((data) => setTopic(data.data));
  };
  useEffect(() => {
    getTopicsByCategory();
  }, []);
  return (
    <div>
      {topic.map((item) => <li key={item._id}>{item.TopicName}</li>)}
    </div>
  );
};

export default TopicsByCategory;
