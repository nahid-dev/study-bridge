import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LesionCard = () => {
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
            <div className="flex flex-col gap-3">
              {[...Array(5)].map((_, index) => (
                <p className="font-medium text-lg p-2 bg-white cursor-pointer">
                  Video {index + 1}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LesionCard;
