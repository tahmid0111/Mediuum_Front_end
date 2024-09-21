import React from "react";
import { BsPencilFill } from "react-icons/bs";

const MyProfile = (props) => {
  const { FullName, SubTitle, Email, Occupation, About } = props.items;
  return (
    <div>
      <div className="flex">
        <h1 className="text-4xl font-bold pb-2">
          {FullName}
        </h1>
        <button className="ml-auto mr-10 btn bg-transparent">
          <BsPencilFill className="text-lg" />
        </button>
      </div>

      <p className="text-lg pb-2 border-b-2 border-blue-400">
        {SubTitle}
      </p>
      <div className="profile-content pt-5">
        <div className="flex font-semibold">
          <span className="block w-32">Email :</span>
          <span>{Email}</span>
        </div>
        <div className="flex font-semibold">
          <span className="block w-32">Profession :</span>
          <span>{Occupation}</span>
        </div>
        <div className="pt-10">
          <h3 className="text-xl font-bold">About Me</h3>
          <p className="text-lg">{About}</p>
          <button className="float-right btn bg-blue-400 btn-info text-lg">
            Edit Bio
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
