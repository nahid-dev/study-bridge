import APIKit from "@/common/helpers/APIKit";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ReviewsTab = ({ course_uid }) => {
  const { data: courseReviews, isLoading } = useQuery({
    queryKey: ["course-review"],
    queryFn: () =>
      APIKit.public.getCourseReviews(course_uid).then(({ data }) => data[0]),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <h4 className="text-2xl text-gray-700 font-medium">Student feedback</h4>
      <div>
        <h4 className="text-xl">{courseReviews?.rating}</h4>
        <p className="text-foreground">{courseReviews?.review}</p>
      </div>
    </div>
  );
};

export default ReviewsTab;
