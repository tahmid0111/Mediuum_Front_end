import axios from "axios";

export const getData = async (url) => {
  let res = await axios.get(url, {
    withCredentials: true,
  });
  return res.data;
};
