import React from "react";
import CollapsableCard from "./CollapsableCard";
import { useQuery } from "@tanstack/react-query";
import APIKit from "@/common/helpers/APIKit";

const CurriculumTab = ({ course_uid }) => {
  const { data: courseCurriculum } = useQuery({
    queryKey: ["course-curriculum"],
    queryFn: () =>
      APIKit.public.getCourseCurriculum(course_uid).then(({ data }) => data),
  });

  return (
    <div className="flex flex-col gap-5">
      {courseCurriculum?.map((curriculum) => (
        <CollapsableCard key={curriculum?.uid} curriculum={curriculum} />
      ))}
    </div>
  );
};

export default CurriculumTab;
