import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import OtpInput from "react-otp-input";

import { FaEnvelopeOpen } from "react-icons/fa6";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Grid } from "react-loader-spinner";
import { VerifyOTP } from "../../api/otp/otp.api";
import { removeEmail } from "../../helper/otp/otp.helper";

const OTPVerify = () => {
  const navigate = useNavigate();
  const {task} = useParams();

  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const SendOTP = async (value) => {
    setIsLoading(true);
    console.log(value)
    let res = await VerifyOTP(value);
    console.log(res);
    setIsLoading(false);
    if (res.status === "fail" || res.status === "wrongOTP") {
      setTimeout(() => {
        toast.error(res.message);
      }, 1000);
      setTimeout(() => {
        removeEmail();
        navigate("/sendEmail");
      }, 2000);
      setOtp("");
    }
    if (res.status === "success") {
      setTimeout(() => {
        toast.success(res.message);
      }, 1000);
      setTimeout(() => {
        navigate(`/${task}`);
      }, 2000);
    }
  };

  useEffect(() => {
    if (otp.length === 6) {
      SendOTP(otp);
      // setIsLoading(true);
    }
  }, [otp]);
  if (isLoading) {
    return (
      <div className="h-screen bg-black flex justify-center items-center">
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      </div>
    );
  }
  return (
    <div className="h-screen bg-black">
      <Toaster />
      <div className="grid grid-cols-12 text-center">
        <div className="col-span-12 mx-auto my-10 h-[150px]">
          <div className="bg-green-500 px-24 md:px-36 py-10 rounded-xl">
            <FaEnvelopeOpen className="text-white text-6xl md:text-8xl 2xl:text-9xl" />
          </div>
        </div>
        <div className="col-span-12 py-5 2xl:py-20">
          <motion.p
            className="text-2xl 2xl:text-4xl text-white font-bold px-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}>
            Put your received code here
          </motion.p>
        </div>
        <div className="col-span-12 mx-auto mt-10">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>- </span>}
            renderInput={(props) => (
              <input
                {...props}
                inputMode="numeric"
                className="text-3xl sm:text-6xl ml-4 rounded-md"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default OTPVerify;
