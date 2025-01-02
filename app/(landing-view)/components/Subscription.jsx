"use client";
import TextInputField from "@/components/forms/TextInputField";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import React from "react";

const Subscription = () => {
  return (
    <div className="py-20 px-4 w-fit mx-auto">
      <SectionHeader
        title="Subscribe our newsletter"
        helperText="Your download should start automatically, if not Click here. Should I give up, huh?."
      />
      <div className="pt-10">
        <div className="flex items-center gap-2 w-full">
          <TextInputField
            type="email"
            id={"email"}
            name={"email"}
            placeholder="Enter your email"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <Button className="px-10 bg-[#146ecf] text-white hover:bg-[#0f5fba] py-[18px]">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
