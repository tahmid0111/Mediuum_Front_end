import React from "react";
import { motion } from "framer-motion";

const HeroTitle = () => {
  return (
    <>
      <motion.span
        className="text-2xl xs:text-3xl xxm:text-4xl sm:text-5xl lg:text-7xl font-bold text-green-500 px-1 md:px-2 lg:px-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Explore,
      </motion.span>
      <motion.span
        className="text-2xl xs:text-3xl xxm:text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-500 px-1 md:px-2 lg:px-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Share,
      </motion.span>
      <motion.span
        className="text-2xl xs:text-3xl xxm:text-4xl sm:text-5xl lg:text-7xl font-bold text-yellow-500 px-1 md:px-2 lg:px-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Inspire
      </motion.span>
      <motion.h1
        className="text-2xl xs:text-3xl xxm:text-4xl sm:text-5xl lg:text-7xl font-bold text-fuchsia-500 px-1 md:px-2 lg:px-3 py-5 md:py-5 lg:py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Where good ideas find you
      </motion.h1>
    </>
  );
};

export default HeroTitle;
