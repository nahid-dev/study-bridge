/* eslint-disable react/no-unescaped-entities */
import { X } from "lucide-react";
import React from "react";
import TextInputField from "../forms/TextInputField";
import PasswordInputField from "../forms/PasswordInputField";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const SignUpSection = ({
  setIsOpen,
  isOpenSignUpDrawer,
  setIsOpenSignUpDrawer,
}) => {
  const signUpSectionVariant = {
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
      animate={isOpenSignUpDrawer ? "open" : "close"}
      variants={signUpSectionVariant}
      className="flex flex-col gap-7"
    >
      <header className="flex items-center justify-between">
        <h4 className="text-lg font-medium">Sign Up And Start Learning!</h4>
        <span className="p-1 text-tertiary hover:cursor-pointer hover:rotate-90 transition-all duration-300 hover:bg-gray-100 rounded-full">
          <X onClick={() => setIsOpen(false)} className="size-6" />
        </span>
      </header>
      <form className="flex flex-col gap-8">
        <div>
          <TextInputField
            label="Username"
            id="username"
            type="text"
            placeholder="John Doe"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
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
          <Button className="w-full">SIGN UP</Button>
        </div>
      </form>
      <div>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <span
            onClick={(e) => {
              e.stopPropagation();
              setIsOpenSignUpDrawer(false);
            }}
            className="underline text-primary cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpSection;
