"use client";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import React, { useState } from "react";
import LesionCard from "./components/LesionCard";
import APIKit from "@/common/helpers/APIKit";
import toast from "react-hot-toast";
import QuizSection from "./components/QuizSection";
import { useQuery } from "@tanstack/react-query";
import QuizResultSection from "./components/QuizResultSection";

const ContinueCourseDetails = ({ params }) => {
  const course_uid = params.uid;
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [lessonUid, setLessonUid] = useState("");
  const [isShowQuizResult, setIsShowQuizResult] = useState(false);

  const { data: courseContinue, isLoading } = useQuery({
    queryKey: ["course-continue"],
    queryFn: () =>
      APIKit.student.getCourseContinue(course_uid).then(({ data }) => data),
  });

  const handleLectureComplete = (lecture) => {
    setSelectedLecture(lecture);
    const payload = {
      is_completed: true,
    };
    APIKit.student
      .postLectureComplete(course_uid, lecture?.uid, payload)
      .then(() => {
        toast.success("Lesion completed");
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleStartQuiz = (lessonUid) => {
    setLessonUid(lessonUid);
    setShowQuiz(true);
  };
  const showQuizResult = (lessonUid) => {
    setLessonUid(lessonUid);
    setIsShowQuizResult(true);
  };

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className="py-5">
      <SectionHeader customClassName="items-start" title="Continue course" />
      <Container>
        <div className="py-50 grid grid-cols-3 gap-5">
          {/* sidebar */}
          <div className="p-3 border rounded-md bg-gray-100 col-span-1 gap-3 flex flex-col">
            {courseContinue?.map((item) => (
              <LesionCard
                key={item?.uid}
                lesionData={item}
                handleLectureComplete={handleLectureComplete}
                handleStartQuiz={handleStartQuiz}
                setSelectedLecture={setSelectedLecture}
                showQuizResult={showQuizResult}
              />
            ))}
          </div>
          {/* video */}
          <div className="col-span-2">
            {isShowQuizResult ? (
              <QuizResultSection
                lessonUid={lessonUid}
                course_uid={course_uid}
              />
            ) : showQuiz ? (
              <QuizSection lessonUid={lessonUid} course_uid={course_uid} />
            ) : selectedLecture === null ? (
              <></>
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${new URL(
                  selectedLecture?.video_url
                ).searchParams.get("v")}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
              ></iframe>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContinueCourseDetails;
