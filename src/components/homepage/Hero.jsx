import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 px-20 py-10 bg-black">
      <div className="text-area col-span-12 text-center pt-20">
        <motion.span
          className="text-7xl font-bold text-green-500 px-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          Explore,
        </motion.span>
        <motion.span
          className="text-7xl font-bold text-blue-500 px-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          Share,
        </motion.span>
        <motion.span
          className="text-7xl font-bold text-yellow-500 px-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Inspire
        </motion.span>
        <motion.h1
          className="text-7xl font-bold text-fuchsia-500 px-3 py-10 whitespace-pre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          Where good ideas find you
        </motion.h1>
      </div>
      <div className="button-area col-span-12 text-center mt-20 mb-10">
        <Link to="/blogByCategory/64f875ed502e1b80556da101" className="">
          <button className="btn btn-primary btn-outline text-3xl font-bold px-10 pt-2 pb-12">
            Start reading
          </button>
        </Link>
        <Link to="/login">
          <button className="btn btn-accent btn-outline mx-10 px-10 pt-2 pb-12 text-3xl font-bold">
            Start writing
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
