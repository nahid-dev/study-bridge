/* eslint-disable react/no-unescaped-entities */
import { X } from "lucide-react";
import React from "react";
import TextInputField from "../forms/TextInputField";
import PasswordInputField from "../forms/PasswordInputField";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { object, string } from "yup";
import APIKit from "@/common/helpers/APIKit";
import toast from "react-hot-toast";
import FormikErrorBox from "../forms/FormikErrorBox";
import { setJWTTokenAndRedirect } from "../StudentAuthGuardHOC";
import { useRouter } from "next/navigation";

const signUPValidationSchema = object({
  first_name: string().required("First name is required"),
  last_name: string().required("Last name is required"),
  email: string().required("Email is required"),
  password: string().required("Password is required"),
});

const SignUpSection = ({
  setIsOpen,
  isOpenSignUpDrawer,
  setIsOpenSignUpDrawer,
}) => {
  const router = useRouter();
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
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUPValidationSchema,

    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      const handleSuccess = ({ data }) => {
        setJWTTokenAndRedirect(data?.token?.access, () => {
          router.push("/dashboard/my-courses");
          setIsOpen(false);
        });
        toast.success("Successfully signed up!");
        setIsOpenSignUpDrawer(false);
      };

      const handleFailure = (error) => {
        console.error(
          "HandleFailure triggered:",
          error?.response?.data?.email[0]
        );
        toast.error(error?.response?.data?.email[0] || "Something went wrong!");
      };

      const promise = APIKit.auth
        .register(values)
        .then(handleSuccess)
        .catch(handleFailure);
      return toast.promise(promise, {
        loading: "Signing up...",
      });
    },
  });

  return (
    <motion.div
      initial="close"
      animate={isOpenSignUpDrawer ? "open" : "close"}
      variants={signUpSectionVariant}
      className="flex flex-col gap-7"
    >
      <header className="flex items-center justify-between">
        <h4 className="text-lg font-medium">Sign Up And Start Learning!</h4>
        <span className="p-1 hover:cursor-pointer hover:rotate-90 transition-all duration-300 hover:bg-gray-100 rounded-full">
          <X onClick={() => setIsOpen(false)} className="size-6" />
        </span>
      </header>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
        <div>
          <TextInputField
            label="First Name"
            id="first_name"
            name="first_name"
            type="text"
            placeholder="e,g. John"
            value={formik.values.first_name}
            onChange={formik.handleChange}
          />
          <FormikErrorBox formik={formik} field="first_name" />
        </div>
        <div>
          <TextInputField
            label="Last Name"
            id="last_name"
            name="last_name"
            type="text"
            placeholder="e,g. Doe"
            value={formik.values.last_name}
            onChange={formik.handleChange}
          />
          <FormikErrorBox formik={formik} field="last_name" />
        </div>
        <div>
          <TextInputField
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="e,g. example@mail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <FormikErrorBox formik={formik} field="email" />
        </div>
        <div>
          <PasswordInputField
            label="Password"
            id="password"
            name="password"
            placeholder="*******"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <FormikErrorBox formik={formik} field="password" />
        </div>
        <div>
          <PasswordInputField
            label="Confirm Password"
            id="confirm_password"
            name="confirm_password"
            placeholder="*******"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
          />
          <FormikErrorBox formik={formik} field="confirm_password" />
        </div>
        {/* <div>
          <PasswordInputField
            label="Confirm Password"
            id="password"
            name="password"
            placeholder="*******"
            onChange={(e) => console.log(e.target.value)}
          />
        </div> */}
        <div>
          <Button type="submit" className="w-full">
            SIGN UP
          </Button>
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
