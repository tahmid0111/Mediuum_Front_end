import axios from "axios";
import { userURL } from "../utility/url.helper";

export const Register = async (values) => {
  let url = `${userURL}/register`;
  const formData = new FormData();
  // if (values.file) {
  //   formData.append("file", values.file);
  // }
  // Loop through values object and append each key-value pair to FormData
  for (const [key, value] of Object.entries(values)) {
    formData.append(key, value);
  }
  // Use FormData with axios.post
  let result = await axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(result);
  return result.data;
};

export const LoginApi = async (values) => {
  let url = `${userURL}/login`;
  let result = await axios.post(url, values, { withCredentials: true });
  return result.data;
};

export const LogoutApi = async () => {
  let url = `${userURL}/logout`;
  let result = await axios.post(url, "", { withCredentials: true });
  return result.data;
};
