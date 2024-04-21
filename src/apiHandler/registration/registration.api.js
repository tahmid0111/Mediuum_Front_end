import axios from "axios";
import { ApiURL } from "../../helper/URL/URLHelper";

const User_Base_URL = "http://localhost:8080/user/api/v1";
const Writer_Base_URL = "http://localhost:8080/writer/api/v1";

export const Register = async (values) => {
  let url = ApiURL(User_Base_URL, "register");

  let result = await axios.post(url, values);
  return result.data;
};

export const LoginApi = async (values) => {
  let url = ApiURL(User_Base_URL, "login");
  let result = await axios.post(url, values, { withCredentials: true });
  return result.data;
};
