import axios from "axios";
import { otpURL } from "../utility/url.helper";
import { getEmail } from "../utility/otp.helper";

export const SendEmail = async (email) => {
  let url = `${otpURL}/sendEmailWithOTP`;
  let myBody = { Email: email };

  let result = await axios.post(url, myBody);
  return result.data;
};

export const VerifyOTP = async (value) => {
  let url = `${otpURL}/verifyOTP`
  let email = getEmail();
  const myBody = {
    Email: email,
    otp: value,
  }
  console.log(myBody)
  let result = await axios.post(url, myBody);
  console.log(result.data)
  return result.data;
}