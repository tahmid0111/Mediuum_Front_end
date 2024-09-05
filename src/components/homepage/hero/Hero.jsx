import { Link } from "react-router-dom";
import { getEmail } from "../../../helper/otp/otp.helper";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 md:px-5 lg:px-10 xl:px-20 py-10 bg-black">
      <div className="text-area col-span-12 text-center sm:pt-20">
        <HeroTitle />
      </div>
      <div className="button-area col-span-12 text-center mt-5 md:mt-10 xl:mt-20 mb-10">
        <Link
          to={
            getEmail() ? `/blogByCategory/64f875ed502e1b80556da101` : "/login"
          }
        >
          <button className="btn btn-primary btn-outline text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold px-2 sm:px-5 md:px-10 md:pt-2 md:pb-3 lg:pb-12">
            Start reading
          </button>
        </Link>
        <Link to={getEmail() ? `/profile` : "/login"}>
          <button className="btn btn-accent btn-outline mx-4 sm:mx-10 px-2 sm:px-5 md:px-10 md:pt-2 md:pb-3 lg:pb-12 text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold">
            Start writing
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
