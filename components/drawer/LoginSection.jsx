/* eslint-disable react/no-unescaped-entities */
import { X } from "lucide-react";
import React from "react";
import TextInputField from "../forms/TextInputField";
import PasswordInputField from "../forms/PasswordInputField";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import DrawerHeader from "../DrawerHeader";

const LoginSection = ({
  setIsOpen,
  isOpenSignUpDrawer,
  setIsOpenSignUpDrawer,
}) => {
  const loginSectionVariants = {
    open: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    close: {
      y: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };
  return (
    <motion.div
      initial="close"
      animate={!isOpenSignUpDrawer ? "open" : "close"}
      variants={loginSectionVariants}
      className="flex flex-col gap-7"
    >
      <DrawerHeader
        setIsOpen={setIsOpen}
        title="Log In To Your Language Learning Account!"
      />
      <form className="flex flex-col gap-8">
        <div>
          <TextInputField
            label="Username or Email"
            id="email"
            type="email"
            placeholder="example@mail.com"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div>
          <PasswordInputField
            label="Password"
            id="password"
            name="password"
            placeholder="*******"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div>
          <Button className="w-full">Login</Button>
        </div>
      </form>
      <div>
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <span
            onClick={(e) => {
              e.stopPropagation();
              setIsOpenSignUpDrawer(true);
            }}
            className="underline text-primary cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginSection;
