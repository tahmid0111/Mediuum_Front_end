import React from "react";

const MyProfile = (props) => {
  const { FirstName, LastName, Email, Occupation, About } = props.items;
  return (
    <div>
      <h1 className="text-4xl font-bold pb-2">
        {FirstName} {LastName}
      </h1>
      <p className="text-lg pb-2 border-b-2 border-blue-400">
        Software Engineer | Working on Javascript and React
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
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
