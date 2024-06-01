import React from "react";
import { motion } from "framer-motion";

const widthAnimation = {
  initial: { width: 0 },
  animate: { width: "100%" },
  exit: { width: "100%", x: -window.innerWidth },
};

const PageTrasition = ({ children }) => {
  return (
    <motion.div
      className=" h-full flex flex-col w-full bg-red-500"
      transition={{ ease: "easeInOut", duration: 1 }}
      variants={widthAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTrasition;
