import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { getEmail } from "../../utility/otp.helper";
import { Register } from "../../api/registration.api";

const jobs = [
  "Software Engineer",
  "Doctor",
  "Data Analyst",
  "Marketing Specialist",
  "Civil Engineer",
  "Financial Analyst",
  "Human Resources Manager",
  "Student",
  "others",
];

const Registration = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState("");
  const email = getEmail();
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const formik = useFormik({
    initialValues: {
      FullName: "",
      SubTitle: "",
      // Email: `${email}`,
      Email: `demo5@gmail.com`,
      Password: "",
      Occupation: "Software Engineer",
      About: "",
    },

    validationSchema: yup.object({
      FullName: yup
        .string()
        .min(8, "name must have at least 8 characters")
        .required(),
      SubTitle: yup
        .string()
        .max(100, "sub title can't have more than 100 characters"),
      Email: yup.string().email().required(),
      Password: yup
        .string()
        .min(8, "password must have at least 8 characters")
        .required(),
      About: yup
        .string()
        .min(15, "about must have at least 15 characters")
        .max(500, "details can't have more than 500 characters")
        .required(),
    }),

    onSubmit: async (values, { resetForm }) => {
      if (values.Password !== confirmPassword) {
        return toast.error("Passwords do not match");
      }
      setIsLoading(true);
      let myValues = {
        ...values,
        file: file,
      };

      let res = await Register(myValues);
      setConfirmPassword("");
      setIsLoading(false);
      resetForm({ values: "" });

      if (res.status === "success") {
        setTimeout(() => {
          toast.success(res.message);
        }, 1000);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else if (res.status === "incorrectPassword") {
        setTimeout(() => {
          toast.error(res.message);
        }, 1000);
      }
    },
  });
  const renderFullNameError = formik.touched.FullName &&
    formik.errors.FullName && (
      <span className="block text-red-500 pt-2">{formik.errors.FullName}</span>
    );
  const renderSubTitleError = formik.touched.SubTitle &&
    formik.errors.SubTitle && (
      <span className="block text-red-500 pt-2">{formik.errors.SubTitle}</span>
    );
  const renderPasswordError = formik.touched.Password &&
    formik.errors.Password && (
      <span className="block text-red-500 pt-2">{formik.errors.Password}</span>
    );

  const renderAboutError = formik.touched.About && formik.errors.About && (
    <span className="block text-red-500 pt-2">{formik.errors.About}</span>
  );

  if (isLoading) {
    return (
      <div>
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
    <div className="bg-black px-10 py-10">
      <Toaster />
      <div className="border border-blue-500 rounded-2xl px-5 lg:px-10 xl:px-24 py-10">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <h1 className="text-center text-4xl text-blue-500 font-bold mb-10">
                Registration
              </h1>
            </div>
            <div className="col-span-12 md:col-span-6 md:mx-2 lg:mx-4 xl:mx-10 my-5">
              <label htmlFor="FirstName">
                <span className="block text-blue-500 pb-2">Full Name</span>
              </label>
              <input
                type="text"
                name="FullName"
                value={formik.values.FullName}
                onChange={formik.handleChange}
                placeholder="your name"
                className="input input-lg bg-black w-full border border-gray-500 focus:border-gray-500 text-white"
                required
              />
              {renderFullNameError}
            </div>
            <div className="col-span-12 md:col-span-6 md:mx-2 lg:mx-4 xl:mx-10 my-5">
              <label htmlFor="SubTitle">
                <span className="block text-blue-500 pb-2">Sub Title</span>
              </label>
              <input
                type="text"
                name="SubTitle"
                value={formik.values.SubTitle}
                onChange={formik.handleChange}
                placeholder="sub title"
                className="input input-lg bg-black w-full border border-gray-500 focus:border-gray-500 text-white"
                required
              />
              {renderSubTitleError}
            </div>
            <div className="col-span-12 md:col-span-6 md:mx-2 lg:mx-4 xl:mx-10 my-5">
              <label htmlFor="file">
                <span className="block text-blue-500 pb-2">
                  Profile Picture
                </span>
              </label>
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={handleFile}
                className="file-input file-input-bordered file-input-secondary w-full"
                required
              />
            </div>
            <div className="col-span-12 md:col-span-6 md:mx-2 lg:mx-4 xl:mx-10 my-5">
              <label htmlFor="Occupation">
                <span className="block text-blue-500 pb-2">Occupation</span>
              </label>
              <select
                name="Occupation"
                value={formik.values.Occupation}
                onChange={formik.handleChange}
                className="select select-bordered w-full max-w-xs"
              >
                {jobs.map((item, i) => (
                  <option value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-12 lg:mx-4 xl:mx-10 my-5">
              <label htmlFor="About">
                <span className="block text-blue-500 pb-2">
                  Write about yourself
                </span>
              </label>
              <textarea
                name="About"
                value={formik.values.About}
                onChange={formik.handleChange}
                className="textarea bg-black w-full border border-gray-500 focus:border-gray-500 text-white text-lg"
                placeholder="start typing here ..."
                rows="5"
              ></textarea>
              {renderAboutError}
            </div>
            <div className="col-span-12 md:col-span-6 md:mx-2 lg:mx-2 xl:mx-10 my-5">
              <label htmlFor="Password">
                <span className="block text-blue-500 pb-2">Password</span>
              </label>
              <input
                type="password"
                name="Password"
                value={formik.values.Password}
                onChange={formik.handleChange}
                placeholder="password"
                className="input input-lg bg-black w-full border border-gray-500 focus:border-gray-500 text-yellow-500"
              />
              {renderPasswordError}
              <span className="block text-red-300 pt-2 text-center">
                password must contain at least one uppercase, one lowercase, one
                digit and one special character
              </span>
            </div>
            <div className="col-span-12 md:col-span-6 md:mx-2 lg:mx-2 xl:mx-10 my-5">
              <label htmlFor="password2">
                <span className="block text-blue-500 pb-2">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                name="password2"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                placeholder="confirm password"
                className="input input-lg bg-black w-full border border-gray-500 focus:border-gray-500 text-yellow-500"
              />
            </div>
            <div className="col-span-12 mx-auto my-10">
              <button
                type="submit"
                className="btn btn-lg btn-secondary px-10 sm:px-[100px] md:px-48 2xl:px-80 text-2xl"
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
