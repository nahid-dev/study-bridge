"use client";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import React from "react";
import LesionCard from "./components/LesionCard";

const ContinueCourseDetails = () => {
  return (
    <div className="py-5">
      <SectionHeader customClassName="items-start" title="Course title" />
      <Container>
        <div className="py-50 grid grid-cols-3 gap-5">
          {/* sidebar */}
          <div className="p-3 border rounded-md bg-gray-100 col-span-1">
            <LesionCard />
          </div>
          {/* video */}
          <div className="col-span-2">
            {/* <video
              className="w-full"
              src="https://youtu.be/D0UnqGm_miA?si=1SvEIjgVKjhl9b1V"
              controls
            ></video> */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/D0UnqGm_miA?si=1SvEIjgVKjhl9b1V"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="w-full"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContinueCourseDetails;
