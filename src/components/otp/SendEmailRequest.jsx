import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { SendEmail } from "../../apiHandler/otp/otp.api";

import { FaEnvelope } from "react-icons/fa6";

import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { Comment } from "react-loader-spinner";
import { motion } from "framer-motion";
import { setEmailHelper } from "../../helper/otp/otp.helper";

const SendEmailRequest = () => {
  const navigate = useNavigate();
  const {task} = useParams();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      let res = await SendEmail(email);
      setIsLoading(false);
      if (res.status === "fail" || res.status === "invalidEmail") {
        toast.error(res.message);
      } else {
        setEmailHelper(res.data);
        setTimeout(() => {
          Swal.fire({
            title: res.status,
            text: res.message,
            icon: res.status,
            confirmButtonText: "Cool",
          });
        }, 1000);
        setTimeout(() => {
          navigate(`/verifyOTP/${task}`);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return (
      <div className="h-screen bg-black flex justify-center items-center">
        <Comment
          visible={true}
          height="180"
          width="180"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
        <p className="text-white text-xl">it can take a few seconds, please wait!</p>
      </div>
      
    );
  } else {
    return (
      <div className="h-screen bg-black">
        <Toaster />
        <div className=" text-center grid grid-cols-12">
          <div className="col-span-12 mx-auto my-10 h-[150px]">
            <div className="bg-blue-500 px-24 md:px-36 py-10 rounded-xl">
              <FaEnvelope className="text-white text-6xl md:text-8xl 2xl:text-9xl" />
            </div>
          </div>
          <div className="col-span-12 py-5 2xl:py-20">
            <motion.p
              className="text-2xl 2xl:text-4xl text-white font-bold px-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}>
              You will receive an one time OTP code via Email
            </motion.p>
          </div>
          <div className="col-span-12 mt-10">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className="input input-bordered input-secondary w-72 md:w-96 2xl:w-[500px] bg-gray-500 text-2xl text-white my-10 py-7"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-primary w-72 md:w-96 2xl:w-[500px] text-xl font-bold">
                  Get OTP Code
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default SendEmailRequest;
