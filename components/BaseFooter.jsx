"use client";
import { footerSections } from "@/lib/options";
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
        isLandingView ? "bg-primary text-white pt-10" : "bg-[#f7f9fb]"
      }  `}
    >
      <div className="p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {footerSections.map((item, index) => (
          <div key={index} className="flex flex-col gap-5 text-center">
            <h5
              className={`${
                isLandingView ? "text-white" : ""
              } text-xl font-medium`}
            >
              {item?.title}
            </h5>
            <ul className="flex flex-col gap-2">
              {item.links.map((link, index) => (
                <li key={index}>
                  <a
                    // className={`${
                    //   isLandingView ? "text-white" : "text-foreground"
                    // } text-lg hover:text-primary`}
                    href={link?.link}
                    className="text-gray-400"
                  >
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="h-[1px] w-full bg-foreground"></div>

      <div className="flex items-center py-5 mx-auto text-center">
        <p className="w-full text-gray-400">
          Copyright © 2025 British English Learn. Empowering learners worldwide
          to speak confidently. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default BaseFooter;
