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
  return (
    <div className="bg-primary text-white">
      <div className="p-20 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-5 text-center">
          <h5 className="text-xl font-semibold text-white">
            Our Latest Courses
          </h5>
          <ul>
            {companyInfoList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <h5 className="text-xl font-semibold text-white">Our Social Links</h5>
          <ul className="w-full">
            {latestCourses?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <h5 className="text-xl font-semibold text-white">
            Our Latest Courses
          </h5>
          <ul>
            {companyInfoList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="border" />
      <div className="flex items-center py-5 mx-auto text-center">
        <p className="w-full">
          Copyright © 2021 Learning Language. All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default BaseFooter;
