import React from "react";
import { FaPowerOff, FaTriangleExclamation } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { LogoutApi } from "../../../api/registration/registration.api";
import { getToken } from "../../../helper/otp/otp.helper";

const LogoutBtn = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log(getToken())
    let res = await LogoutApi();
    // console.log(res);
    // if(res.status === "success"){

    // }
    // navigate("/");
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
