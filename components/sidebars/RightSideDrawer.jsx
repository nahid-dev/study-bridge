import React from "react";
import { motion } from "framer-motion";

const RightSideDrawer = ({ isOpen, setIsOpen, children }) => {
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    close: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };
  return (
    <>
      {/* BACKDROP */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></motion.div>
      )}

      {/* DRAWER */}
      <motion.div
        initial="close"
        animate={isOpen ? "open" : "close"}
        variants={sidebarVariants}
        className="fixed top-0 right-0 h-full bg-white shadow-lg z-50 max-w-md w-full p-10"
      >
        <div>{children}</div>
      </motion.div>
    </>
  );
};

export default RightSideDrawer;
