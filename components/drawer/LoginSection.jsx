/* eslint-disable react/no-unescaped-entities */
import { X } from "lucide-react";
import React, { useState } from "react";
import TextInputField from "../forms/TextInputField";
import PasswordInputField from "../forms/PasswordInputField";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import DrawerHeader from "../DrawerHeader";
import { useFormik } from "formik";
import { object, string } from "yup";
import FormikErrorBox from "../forms/FormikErrorBox";
import APIKit from "@/common/helpers/APIKit";
import toast from "react-hot-toast";
import { setJWTTokenAndRedirect } from "../StudentAuthGuardHOC";
import { useRouter } from "next/navigation";

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

const loginValidationSchema = object({
  email: string().email().required("Email is required."),
  password: string().required("Password is required."),
});

const LoginSection = ({
  setIsOpen,
  isOpenSignUpDrawer,
  setIsOpenSignUpDrawer,
}) => {
  const router = useRouter();
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,

    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      const handleSuccess = ({ data }) => {
        setJWTTokenAndRedirect(data?.token?.access, () => {
          router.push("/dashboard/my-courses");
        });
      };

      const handleFailure = (error) => {
        setInitialValues(values);

        if (error?.response) {
          const data = error.response.data;
          if (data.detail) {
            setBackendErrors({ non_field_errors: data.detail });
          } else if (data) {
            setBackendErrors(data);
          }
        }

        throw error;
      };
      const promise = APIKit.auth
        .login(values)
        .then(handleSuccess)
        .catch(handleFailure)
        .finally(() => setSubmitting(false));

      return toast.promise(promise, {
        loading: "Signing you in...",
        success: "Signed in successfully",
        error: (error) =>
          error.response.data?.details || "Authentication failed!",
      });
    },
  });

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
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
        <div>
          <TextInputField
            label="Email"
            id="email"
            type="email"
            placeholder="example@mail.com"
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
          <Button type="submit" className="w-full">
            Login
          </Button>
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
