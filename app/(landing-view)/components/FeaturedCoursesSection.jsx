import CourseCard from "@/components/cards/CourseCard";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { courses } from "@/lib/options";
import React from "react";

const FeaturedCoursesSection = () => {
  return (
    <div className="py-10">
      <SectionHeader
        title="Featured Courses"
        helperText="Discover your perfect program in our courses."
        customClassName="items-start"
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
          {courses.slice(0, 6).map((item, index) => (
            <CourseCard key={index} cardDetails={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedCoursesSection;
