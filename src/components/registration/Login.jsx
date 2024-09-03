import React, { useState } from "react";
import { useFormik } from "formik";
import { LoginApi } from "../../api/registration/registration.api";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { setEmailHelper, setTokenHelper } from "../../helper/otp/otp.helper";
import { getData } from "../../api/common/getData";
// redux
import { useDispatch } from "react-redux";
import { addData } from "../../redux/slice/profile/profileSlice";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const fetchData = async () => {
    let res = await getData(`http://localhost:8080/user/api/v1/readUserProfile`);
    dispatch(addData(res.data))
  }

  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },

    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      let res = await LoginApi(values);

      if (res.status === "success") {
        setEmailHelper(values.Email);
        resetForm({ values: "" });
        fetchData()
        navigate("/blogByCategory/64f875ed502e1b80556da101");
        setIsLoading(false);

      } else if (res.status === "incorrectPassword") {
        setIsLoading(false);
        setTimeout(() => {
          toast.error(res.message);
        }, 1000);
      }
    },
  });

  if (isLoading) {
    return (
      <div className="h-screen bg-black flex justify-center items-center">
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }
  return (
    <div className="h-screen bg-gray-900 grid grid-cols-12 items-center">
      <Toaster />
      <div className="card col-span-12 md:w-7/12 lg:w-5/12 2xl:w-6/12 h-[500px] mx-auto bg-white shadow-2xl shadow-blue-500/20">
        <div className="card-body">
          <h2 className="text-center text-4xl font-medium mb-4 ">Login</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-control mb-4">
              <label className="label" htmlFor="username">
                <span className="text-xl font-bold text-blue-500">Email</span>
              </label>
              <input
                type="email"
                name="Email"
                placeholder="enter email"
                value={formik.values.Email}
                onChange={formik.handleChange}
                className="input input-bordered w-full text-xl shadow-lg"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label" htmlFor="password">
                <span className="text-xl font-bold text-blue-500">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="Password"
                placeholder="········"
                value={formik.values.Password}
                onChange={formik.handleChange}
                className="input input-bordered w-full text-3xl shadow-lg"
                required
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="btn btn-warning w-full text-xl font-bold"
              >
                Log In
              </button>
            </div>
            {/* <div
              class="button w-40 float-right h-14 bg-blue-500 rounded-lg cursor-pointer select-none
                active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                active:border-b-[0px]
                transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
                border-b-[1px] border-blue-400
              ">
              <span class="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
                Log in
              </span>
            </div> */}
          </form>
          <div className="mt-4 text-center pt-5">
            <Link
              to="/sendEmail/forgetPassword"
              className="text-blue-500 font-bold"
            >
              Forget Password?
            </Link>
          </div>
          <div className="mt-4 text-center">
            <span>Didn't have an account? </span>
            <Link
              to="/sendEmail/register"
              className="font-bold underline hover:text-blue-500"
            >
              create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
