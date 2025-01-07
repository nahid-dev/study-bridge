"use client";
import APIKit from "@/common/helpers/APIKit";
import CourseCard from "@/components/cards/CourseCard";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { courses } from "@/lib/options";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const CoursesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["/courses"],
    queryFn: () => APIKit.public.getCourses().then(({ data }) => data),
  });

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className="mt-20">
      <SectionHeader
        title="Courses"
        helperText="Here are the Courses we offer"
      />
      <div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
            {data?.map((course) => (
              <CourseCard key={course?.uid} cardDetails={course} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CoursesPage;
