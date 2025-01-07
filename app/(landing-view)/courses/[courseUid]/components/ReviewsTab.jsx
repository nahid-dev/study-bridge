import APIKit from "@/common/helpers/APIKit";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ReviewsTab = ({ course_uid }) => {
  const { data: courseReviews } = useQuery({
    queryKey: ["course-review"],
    queryFn: () =>
      APIKit.public.getCourseReviews(course_uid).then(({ data }) => data),
  });

  return (
    <div className="flex flex-col gap-8">
      <h4 className="text-2xl text-gray-700 font-medium">Student feedback</h4>
    </div>
  );
};

export default ReviewsTab;
