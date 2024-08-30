import { useEffect, useState } from "react";
import { getData } from "../../api/common/getData";

const TopicsByCategory = ({ categoryID }) => {
  const [items, setItems] = useState([]);

  let fetchData = async () => {
    let res = await getData(
      `http://localhost:8080/blog/api/v1/readAllTopicByCategory/${categoryID}`
    );
    setItems(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [categoryID]);

  return (
    <div className="my-5">
      <div>
        <h1 className="mb-5 pl-2 border-l-4 border-l-red-500 text-xl">
          Related Topics
        </h1>
      </div>
      <div className="flex flex-wrap">
        {items.map((item) => (
          <div
            key={item._id}
            className="border-2 rounded-full px-5 py-1 m-1 bg-green-100"
          >
            {item.TopicName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsByCategory;
