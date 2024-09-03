import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEmail } from "../../../helper/otp/otp.helper";

const Logo = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Set timeout for 5 seconds

    setTimeout(() => setIsAnimating(false), 2000);
  }, []);
  return (
    <div className="col-span-4">
      <Link to={getEmail() ? `/blogByCategory/64f875ed502e1b80556da101` : "/"}>
        <div className="logo-section flex">
          <img src="/medium-logo.png" alt="logo" className="w-[17%]" />
          <h1
            className={`animate-bounce font-sans ml-3 text-3xl font-bold pt-3 ${
              isAnimating ? "" : "animate-none"
            }`}
          >
            Mediuum
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
