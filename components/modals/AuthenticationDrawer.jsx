/* eslint-disable react/no-unescaped-entities */
import { X } from "lucide-react";
import React, { useState } from "react";
import TextInputField from "../forms/TextInputField";
import PasswordInputField from "../forms/PasswordInputField";
import { Button } from "../ui/button";
import LoginSection from "./LoginSection";
import SignUpSection from "./SignUpSection";

const AuthenticationDrawer = ({ setIsOpen }) => {
  const [isOpenSignUpDrawer, setIsOpenSignUpDrawer] = useState(false);
  return (
    <>
      {!isOpenSignUpDrawer ? (
        <LoginSection
          setIsOpen={setIsOpen}
          isOpenSignUpDrawer={isOpenSignUpDrawer}
          setIsOpenSignUpDrawer={setIsOpenSignUpDrawer}
        />
      ) : (
        <SignUpSection
          setIsOpen={setIsOpen}
          isOpenSignUpDrawer={isOpenSignUpDrawer}
          setIsOpenSignUpDrawer={setIsOpenSignUpDrawer}
        />
      )}
    </>
  );
};

export default AuthenticationDrawer;
