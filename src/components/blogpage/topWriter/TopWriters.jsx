import React, { useEffect, useState } from "react";
import SingleTopWriter from "./SingleTopWriter";
import { getData } from "../../../api/common/getData";

const TopWriters = ({ categoryID }) => {
  const [items, setItems] = useState([]);

  let fetchData = async () => {
    let res = await getData(
      `http://localhost:8080/manager/api/v1/readAllPopularWriter`
    );
    setItems(res.data);
  };
  const randomNumber = Math.floor(Math.random() * (items.length - 2));

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <h1 className="mb-5 pl-2 border-l-4 border-l-red-500 text-xl">
          Popular Writers
        </h1>
        {items.slice(randomNumber, randomNumber + 3).map((item) => (
          <SingleTopWriter item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default TopWriters;
