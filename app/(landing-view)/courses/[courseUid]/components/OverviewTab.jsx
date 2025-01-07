/* eslint-disable react/no-unescaped-entities */
import APIKit from "@/common/helpers/APIKit";
import { useQuery } from "@tanstack/react-query";
import { Check } from "lucide-react";
import React from "react";

const items = [
  "Become a UI/UX designer.",
  "Learn Figma from scratch.",
  "Design User Interface.",
  "Add UI designer to your CV.",
  "Get clients for your skills.",
  "Master Figma app comprehensively.",
  "Develop your user interface design skills.",
  "Add UI designer to your CV.",
  "Start getting clients for your skills.",
  "Develop your user interface design skills.",
];

const OverviewTab = ({ courseDetails }) => {
  const {
    coursedetail = {},
    created_by = {},
    category = {},
    what_you_will_learn = [],
  } = courseDetails || {};
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <h4 className="text-2xl text-gray-700 font-medium">
          Course Description
        </h4>
        <p>{coursedetail?.description || "N/A"}</p>
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="text-2xl text-gray-700 font-medium">
          What you'll learn
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {what_you_will_learn?.map((item) => (
            <div key={item?.uid} className="flex gap-2 items-center">
              <Check className="rounded-full bg-[#4a8f9f] text-white p-1 size-5" />
              <span>{item?.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
