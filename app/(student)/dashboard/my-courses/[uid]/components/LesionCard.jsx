import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const LesionCard = ({
  handleLectureComplete,
  handleStartQuiz,
  setSelectedLecture,
}) => {
  const [isExpendLesion, setIsExpendLesion] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsExpendLesion((prev) => !prev)}
        className="flex items-center justify-between cursor-pointer p-2 shadow border rounded-md"
      >
        <div className="w-full">
          <h4 className="text-lg font-semibold">Lesion 1</h4>
        </div>
        {isExpendLesion ? (
          <div>
            <Minus />
          </div>
        ) : (
          <div>
            <Plus />
          </div>
        )}
      </div>
      <AnimatePresence>
        {isExpendLesion && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            className="border p-2 mt-3"
          >
            <div>
              <div className="flex flex-col gap-3">
                {[...Array(5)].map((_, index) => (
                  <p
                    onClick={() => setSelectedLecture(lecture)}
                    key={index}
                    className="font-medium text-lg p-2 bg-white cursor-pointer"
                  >
                    Lecture {index + 1}
                  </p>
                ))}
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  onCheckedChange={(e) => handleLectureComplete(e)}
                  id="terms"
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Complete lesion
                </label>
              </div>
              <div className="my-2">
                <Button onClick={handleStartQuiz} className="w-full" size="sm">
                  Start quiz
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LesionCard;
