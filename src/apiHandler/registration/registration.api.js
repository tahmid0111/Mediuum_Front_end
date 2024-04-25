import axios from "axios";
import { ApiURL } from "../../helper/URL/URLHelper";

const User_Base_URL = "http://localhost:8080/user/api/v1";
const Writer_Base_URL = "http://localhost:8080/writer/api/v1";

export const Register = async (values) => {
  let url = ApiURL(User_Base_URL, "register");
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
  console.log(result)
  return result.data;
};

export const LoginApi = async (values) => {
  let url = ApiURL(User_Base_URL, "login");
  let result = await axios.post(url, values, { withCredentials: true });
  return result.data;
};
