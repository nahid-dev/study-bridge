"use client";
import APIKit from "@/common/helpers/APIKit";
import CourseCard from "@/components/cards/CourseCard";
import Container from "@/components/Container";
import SearchByTextField from "@/components/SearchByTextField";
import SectionHeader from "@/components/SectionHeader";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const CoursesPage = () => {
  const [params, setParams] = useState({
    category_name: "",
    search: "",
  });
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: () =>
      APIKit.public.getCourses({ params: params }).then(({ data }) => data),
  });

  useEffect(() => {
    refetch();
  }, [params.search, refetch]);

  if (isLoading) {
    return <div className="h-screen">Loading...</div>;
  }

  return (
    <div className="mt-20">
      <SectionHeader
        title="Courses"
        helperText="Here are the Courses we offer"
        customClassName="gap-0"
      />
      <div className="mt-5">
        <Container>
          <div className="flex items-center gap-3 justify-center">
            <div className="w-full sm:w-1/2">
              <SearchByTextField
                name="search"
                id="search"
                placeholder="Search by name..."
                value={params.search}
                onChange={(e) =>
                  setParams((prev) => ({ ...prev, search: e.target.value }))
                }
                onReset={() => setParams((prev) => ({ ...prev, search: "" }))}
              />
            </div>
            {/* <SelectField
              label="Sort By"
              name="sort"
              id="sort"
              options={sortOptions}
              value={sortOptions.find((item) => item.value === params.ordering)}
              onChange={(selectedOption) =>
                setParams((prev) => ({
                  ...prev,
                  ordering: selectedOption.value,
                }))
              }
            /> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
            {data.length > 0 ? (
              data?.map((course) => (
                <CourseCard key={course?.uid} cardDetails={course} />
              ))
            ) : (
              <div>
                <h5 className="text-xl font-semibold">No data found!</h5>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CoursesPage;
