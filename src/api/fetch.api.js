import axios from "axios";

export const getData = async (url) => {
  let res = await axios.get(url, {
    withCredentials: true,
  });
  return res.data;
};

// export const sendParam = async (url, param = "") => {
//   let res = await axios.post(url, param, {
//     withCredentials: true,
//   });
//   return res.data;
// };
