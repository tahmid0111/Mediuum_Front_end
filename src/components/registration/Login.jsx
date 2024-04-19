import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { LoginApi, Register } from "../../apiHandler/registration/registration.api";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: yup.object({
      Email: yup
        .string()
        .email("please provide a valid email")
        .required("this field can't be empty"),
      Password: yup.string().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      let res = await LoginApi(values)
      console.log(res)
      
      resetForm({ values: "" });
    },
  });
  return (
    <div className="h-screen bg-gray-400 grid grid-cols-12 items-center">
      <div className="card col-span-12 w-5/12 h-[500px] mx-auto bg-white shadow-2xl shadow-blue-500/20">
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
              <button type="submit" className="btn btn-success w-full text-white text-xl font-bold">Log In</button>
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
          <div className="mt-4 text-center pt-10">
            <a href="#" className="text-blue-600">
              Forget Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
