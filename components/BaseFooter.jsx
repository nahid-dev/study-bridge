"use client";
import { usePathname } from "next/navigation";
import React from "react";

const companyInfoList = [
  "Home",
  "About Us",
  "Contact Us",
  "Privacy Policy",
  "Terms & Conditions",
  "Refund Policy",
];

const latestCourses = ["Course 1", "Course 2", "Course 3", "Course 4"];

const BaseFooter = () => {
  const pathName = usePathname();
  const isLandingView = pathName.split("/")[1] === "";
  return (
    <div
      className={`${
        isLandingView ? "bg-primary text-white" : "bg-[#f7f9fb]"
      }  pt-10`}
    >
      <div className="p-20 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-5 text-center">
          <h5
            className={`${
              isLandingView ? "text-white" : ""
            } text-xl font-semibold`}
          >
            Our Latest Courses
          </h5>
          <ul>
            {companyInfoList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <h5
            className={`${
              isLandingView ? "text-white" : ""
            } text-xl font-semibold`}
          >
            Our Social Links
          </h5>
          <ul className="w-full">
            {latestCourses?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <h5
            className={`${
              isLandingView ? "text-white" : ""
            } text-xl font-semibold`}
          >
            Our Latest Courses
          </h5>
          <ul>
            {companyInfoList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex items-center py-5 mx-auto text-center">
        <p className="w-full">
          Copyright © 2021 Language Learning. All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default BaseFooter;
