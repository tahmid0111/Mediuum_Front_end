import axios from "axios";
import { ApiURL } from "../../helper/URL/URLHelper";

const Base_URL = "http://localhost:8080/otp/api/v1";

export const SendEmail = async (email) => {
  let url = ApiURL(Base_URL, "sendEmailWithOTP");
  let myBody = { Email: email };

  let result = await axios.post(url, myBody);
  console.log(result);
};
