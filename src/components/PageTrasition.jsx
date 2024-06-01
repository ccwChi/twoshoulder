import React from "react";
import { motion } from "framer-motion";

const pageVariants = (direction) => ({
  initial: { x: direction === "left" ? "100%" : "-100%" },
  animate: { x: 0 },
  exit: { x: direction === "left" ? "-100%" : "100%" },
});

const pageTransition = {
  ease: "easeInOut",
  duration: 0.3,
};

const PageTransition = ({ children, direction }) => {
  return (
    <motion.div
      className="page absolute top-0 bottom-0 w-full flex flex-col items-center"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants(direction)}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;