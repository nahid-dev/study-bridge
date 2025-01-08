import APIKit from "@/common/helpers/APIKit";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const QuizSection = ({ lessonUid, course_uid }) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question index
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option for current question

  // Fetch the quiz data
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["lesson-quiz"],
    queryFn: () =>
      APIKit.student.getQuizzes(course_uid, lessonUid).then(({ data }) => data),
  });

  const { questions = [] } = isLoading || data[0];

  // Handle option change
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Handle Next Question or Submit Quiz
  const handleNextQuestion = async () => {
    if (!selectedOption) {
      toast.error("Please select an option.");
      return;
    }
  
    try {
      const payload = {
        question_uid: questions[currentQuestionIndex]?.uid,
        answer: [...selectedOption],
      };
  
      // Submit the answer using the API
      await APIKit.student.postQuizAnswer(course_uid, lessonUid, payload);
      toast.success("Answer submitted!");
  
      if (currentQuestionIndex < questions.length - 1) {
        // Move to the next question
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null); // Reset the selected option for the next question
      } else {
        // If it’s the last question, handle completion
        toast.success("Quiz completed!");
        await refetch(); // Ensure data is refreshed (if necessary)
  
        // Redirect without causing a page reload
        router.push(`/dashboard/my-courses`);
      }
    } catch (error) {
      toast.error("Something went wrong while submitting the quiz.");
      console.error(error);
    }
  };
  

  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];

  if (isLoading) {
    return "Loading...";
  }
  return (
    <div>
      <div className="mx-auto max-w-3xl bg-gray-100 shadow">
        {/* Question */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h4 className="text-xl font-semibold">{currentQuestion?.question}</h4>
        </div>
        {/* Options */}
        <div className="p-4">
          <ul>
            {Object.entries(currentQuestion?.options || {}).map(
              ([key, value], index) => (
                <li
                  key={index}
                  className="p-2 border-b border-gray-200 text-lg font-medium flex items-center justify-start gap-3"
                >
                  <input
                    className="size-5"
                    type="radio"
                    name={`quiz-options-${currentQuestionIndex}`}
                    value={key}
                    checked={selectedOption === key}
                    onChange={handleOptionChange}
                  />
                  <span>{value}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Next Question / Submit Button */}
        <div className="p-4 text-right">
          <Button
            className="bg-primary text-white p-2 rounded-md"
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex === questions.length - 1
              ? "Submit Quiz"
              : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
