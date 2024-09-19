import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEmail } from "../../../helper/otp/otp.helper";

const Logo = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsAnimating(false), 2000);
  }, []);
  return (
    <>
      <Link to={getEmail() ? `/blogByCategory/66ea642a155631a10f87a018` : "/"}>
        <div className="logo-section flex items-center">
          <img src="/medium-logo.png" alt="logo" className="w-[40px] sm:w-[17%]" />
          <h1
            className={`animate-bounce font-sans ml-3 text-2xl lg:text-3xl font-bold items-center ${
              isAnimating ? "" : "animate-none"
            }`}
          >
            Mediuum
          </h1>
        </div>
      </Link>
    </>
  );
};

export default Logo;
