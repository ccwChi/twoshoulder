import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
};

const pageTransition = {
  ease: "easeInOut",
  duration: 0.5,
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      className="h-full flex flex-col w-full"
      style={{ willChange: "transform" }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;