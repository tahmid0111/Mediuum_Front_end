import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getEmail } from "../../helper/otp/otp.helper";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 md:px-20 py-10 bg-black">
      <div className="text-area col-span-12 text-center pt-20">
        <motion.span
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-500 px-1 md:px-2 lg:px-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          Explore,
        </motion.span>
        <motion.span
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-500 px-1 md:px-2 lg:px-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          Share,
        </motion.span>
        <motion.span
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-500 px-1 md:px-2 lg:px-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Inspire
        </motion.span>
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-fuchsia-500 px-1 md:px-2 lg:px-3 py-5 md:py-5 lg:py-10 whitespace-pre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          Where good ideas find you
        </motion.h1>
      </div>
      <div className="button-area col-span-12 text-center mt-5 md:mt-10 xl:mt-20 mb-10">
        <Link
          to={
            getEmail() ? `/blogByCategory/64f875ed502e1b80556da101` : "/login"
          }
        >
          <button className="btn btn-primary btn-outline text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold px-5 md:px-10 md:pt-2 md:pb-3 lg:pb-12">
            Start reading
          </button>
        </Link>
        <Link
          to={getEmail() ? `/profile` : "/login"}
        >
          <button className="btn btn-accent btn-outline mx-4 sm:mx-10 px-5 md:px-10 md:pt-2 md:pb-3 lg:pb-12 text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold">
            Start writing
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
