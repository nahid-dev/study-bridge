"use client";
import APIKit from "@/common/helpers/APIKit";
import CourseCard from "@/components/cards/CourseCard";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { courses } from "@/lib/options";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const FeaturedCoursesSection = () => {
  const [params, setParams] = useState({
    category_name: "",
    search: "",
  });
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["/courses"],
    queryFn: () =>
      APIKit.public.getCourses({ params: params }).then(({ data }) => data),
  });

  if (isLoading) {
    return "Loading...";
  }
  return (
    <div className="py-10" id="featured-courses">
      <SectionHeader
        title="Featured Courses"
        helperText="Discover your perfect program in our courses."
        customClassName="items-start"
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
          {data?.slice(0, 6)?.map((item, index) => (
            <CourseCard key={index} cardDetails={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedCoursesSection;
