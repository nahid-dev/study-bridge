import CourseCard from "@/components/cards/CourseCard";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { courses } from "@/lib/options";
import React from "react";



const CoursesPage = () => {
  return (
    <div className="mt-20">
      <SectionHeader
        title="Courses"
        helperText="Here are the Courses we offer"
      />
      <div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
            {courses.map((item, index) => (
              <CourseCard key={index} cardDetails={item} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CoursesPage;
