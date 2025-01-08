import APIKit from "@/common/helpers/APIKit";
import { getTimeIn12HourFormat } from "@/common/helpers/UtilKit";
import SectionHeader from "@/components/SectionHeader";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const QuizResultSection = ({ course_uid, lessonUid }) => {
  // Fetch the quiz data
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["lesson-quiz"],
    queryFn: () =>
      APIKit.student
        .getQuizResult(course_uid, lessonUid)
        .then(({ data }) => data),
  });
  const quizResult = isLoading || data[0];

  if (isLoading) {
    return "Loading...";
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <SectionHeader
            title={`${quizResult?.quiz?.title}`}
            customClassName="items-start"
          />
        </div>
        <div className="text-lg font-semibold text-gray-600">
          Submitted at: {getTimeIn12HourFormat(quizResult?.created_at)}
        </div>
      </div>
      <div className="bg-gray-100 border rounded-md p-5">
        <div className="">
          <h5 className="text-xl font-semibold">Score Gain:</h5>
          <p className="text-teal-500 font-semibold">
            {quizResult?.total_marks}{" "}
            <span className="text-gray-600">
              out of {quizResult?.learnerquizquestionanswer_set?.length}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizResultSection;
