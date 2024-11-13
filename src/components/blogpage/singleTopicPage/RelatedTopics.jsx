import React, { useEffect, useState } from "react";
import { getData } from "../../../api/fetch.api";
import { Link } from "react-router-dom";
import { blogURL } from "../../../utility/url.helper";

const RelatedTopics = ({ categoryID, topicID }) => {
  const [items, setItems] = useState([]);

  let fetchData = async () => {
    let url = `${blogURL}/readAllTopicByCategory/${categoryID}`;
    let res = await getData(url);
    setItems(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [categoryID]);
  return (
    <div className="flex">
      {items.map((item) => (
        <Link to={`/singleTopic/${item._id}`} key={item._id}>
          <div
            className={
              topicID === item._id
                ? "bg-green-300 border-2 rounded-full px-5 py-1 m-1"
                : "border-2 rounded-full px-5 py-1 m-1 bg-green-100"
            }
          >
            {item.TopicName}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedTopics;
