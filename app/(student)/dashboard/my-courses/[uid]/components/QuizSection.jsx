import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import toast from "react-hot-toast";

const QuizSection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mx-auto max-w-3xl bg-gray-100 shadow">
      {/* question & time */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h4 className="text-xl font-semibold">This is the quiz question</h4>
        <p>Time left: 10:00</p>
      </div>
      {/* options */}
      <div className="p-4">
        <ul>
          <li className="p-2 border-b border-gray-200 text-lg font-medium flex items-center justify-start gap-3">
            <input
              className="size-5"
              type="radio"
              name="quiz-options"
              value="Option 1"
              checked={selectedOption === "Option 1"}
              onChange={handleOptionChange}
            />
            <span>Option 1</span>
          </li>
          <li className="p-2 border-b border-gray-200 text-lg font-medium flex items-center justify-start gap-3">
            <input
              className="size-5"
              type="radio"
              name="quiz-options"
              value="Option 2"
              checked={selectedOption === "Option 2"}
              onChange={handleOptionChange}
            />
            <span>Option 2</span>
          </li>
          <li className="p-2 border-b border-gray-200 text-lg font-medium flex items-center justify-start gap-3">
            <input
              className="size-5"
              type="radio"
              name="quiz-options"
              value="Option 3"
              checked={selectedOption === "Option 3"}
              onChange={handleOptionChange}
            />
            <span>Option 3</span>
          </li>
          <li className="p-2 border-b border-gray-200 text-lg font-medium flex items-center justify-start gap-3">
            <input
              className="size-5"
              type="radio"
              name="quiz-options"
              value="Option 4"
              checked={selectedOption === "Option 4"}
              onChange={handleOptionChange}
            />
            <span>Option 4</span>
          </li>
        </ul>
      </div>
      {/* submit button */}
      <div className="p-4 text-right">
        <Button
          className="bg-primary text-white p-2 rounded-md"
          onClick={() => {
            if (selectedOption) {
              console.log(`You selected: ${selectedOption}`);
            } else {
              toast.error("Please select an option.");
            }
          }}
        >
          Next Question
        </Button>
      </div>
    </div>
  );
};

export default QuizSection;
