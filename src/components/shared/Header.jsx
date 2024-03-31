import React from "react";

const Header = () => {
  return (
    <div className="bg-yellow-500">
      <div className="grid grid-cols-12 px-20">
        <div className="col-span-4">
          <div className="logo-section">
            <img
              src="/public/medium (1).png"
              alt="logo"
              className="w-[10%] inline-block"
            />
            <h1 className="inline-block ml-3">Mediuum</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
