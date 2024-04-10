import axios from "axios";
import { ApiURL } from "../../helper/URL/URLHelper";
import { getEmail } from "../../helper/otp/otp.helper";

const Base_URL = "http://localhost:8080/otp/api/v1";

export const SendEmail = async (email) => {
  let url = ApiURL(Base_URL, "sendEmailWithOTP");
  let myBody = { Email: email };

  let result = await axios.post(url, myBody);
  return result.data;
};

export const VerifyOTP = async (value) => {
  let url = ApiURL(Base_URL, "verifyOTP")
  let email = getEmail();
  const myBody = {
    Email: email,
    otp: value,
  }

  let result = await axios.post(url, myBody);
  return result.data;
}