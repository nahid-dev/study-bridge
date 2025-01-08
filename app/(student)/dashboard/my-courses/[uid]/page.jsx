"use client";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import React, { useState } from "react";
import LesionCard from "./components/LesionCard";
import APIKit from "@/common/helpers/APIKit";
import toast from "react-hot-toast";
import QuizSection from "./components/QuizSection";

const ContinueCourseDetails = ({ params }) => {
  const course_uid = params.uid;
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleLectureComplete = (e, lesionUid = "123") => {
    const payload = {
      is_completed: e,
    };
    if (e) {
      APIKit.student
        .postLectureComplete(course_uid, lesionUid, payload)
        .then(() => {
          toast.success("Lesion completed");
        })
        .catch((error) => {
          throw error;
        });
    }
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };
  return (
    <div className="py-5">
      <SectionHeader customClassName="items-start" title="Course title" />
      <Container>
        <div className="py-50 grid grid-cols-3 gap-5">
          {/* sidebar */}
          <div className="p-3 border rounded-md bg-gray-100 col-span-1">
            <LesionCard
              handleLectureComplete={handleLectureComplete}
              handleStartQuiz={handleStartQuiz}
              setSelectedLecture={setSelectedLecture}
            />
          </div>
          {/* video */}
          <div className="col-span-2">
            {!showQuiz ? (
              <video
                className="w-full"
                src={selectedLecture?.videoUrl || ""}
                controls
                autoPlay
              ></video>
            ) : (
              <QuizSection />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContinueCourseDetails;
