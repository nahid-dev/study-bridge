import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="text-center flex flex-col gap-4">
        <h1 className="font-bold text-6xl leading-normal">
          Tired of Unorganized Learning? Join{" "}
          <span className="text-primary">StudyBridge</span>
        </h1>
        <p className="text-xl font-semibold text-gray-700">
          We connect you to expert-led courses, interactive quizzes, and an
          easy-to-use platform.
        </p>
        <div className="flex items-center gap-4 justify-center">
          <Button className="bg-gray-700 text-white" size="lg">
            Get Started Now
          </Button>
          <Button size="lg">Explore Courses</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
