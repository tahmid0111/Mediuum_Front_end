import React from "react";
import { FaPowerOff, FaTriangleExclamation } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { LogoutApi } from "../../../api/registration/registration.api";
import { removeEmail } from "../../../helper/otp/otp.helper";

const LogoutBtn = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    let res = await LogoutApi();
    if (res.status === "success") {
      removeEmail();
      navigate("/");
    } else {
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{res.message}</span>
      </div>;
    }
  };

  return (
    <>
      <div>
        <button
          className="bg-slate-200 w-[300px] btn rounded-none text-lg font-bold text-red-500 justify-start pl-10"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Logout <FaPowerOff />
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <FaTriangleExclamation className="text-8xl mx-auto text-red-500" />
            <h3 className="font-bold text-3xl pb-2 text-center">
              Are you leaving!
            </h3>
            <p className="pb-10 text-lg text-center">
              You will be logged out from Medium.
            </p>
            <div className="flex">
              <form method="dialog">
                <button className="btn btn-success text-white">
                  Logged In
                </button>
              </form>
              <button
                className="btn btn-error text-white ml-auto"
                onClick={handleLogout}
              >
                Yes, Log out
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default LogoutBtn;
