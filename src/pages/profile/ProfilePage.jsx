import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { email } = useParams();
  const [data, setData] = useState([]);
  const getData = () => {
    let res = axios.get(`http://localhost:8080/user/api/v1/readUserProfile`);
    console.log(res.data);
    let myData = res.data;
  };
  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
};

export default ProfilePage;
