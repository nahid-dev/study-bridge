/* eslint-disable react/no-unescaped-entities */
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

const OverviewTab = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <h4 className="text-2xl text-gray-700 font-medium">
          Course Description
        </h4>
        <p>
          Do you want to become a UI/UX designer but you don't know where to
          start? This course will allow you to develop your user interface
          design skills and you can add UI designer to your CV and start getting
          clients for your skills.
        </p>
        <p>
          Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I
          will help you learn and master Figma app comprehensively from scratch.
          Figma is an innovative and brilliant tool for User Interface design.
          It's used by everyone from entrepreneurs and start-ups to Apple,
          Airbnb, Facebook, etc.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="text-2xl text-gray-700 font-medium">
          What you'll learn
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <Check className="rounded-full bg-[#4a8f9f] text-white p-1 size-5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
