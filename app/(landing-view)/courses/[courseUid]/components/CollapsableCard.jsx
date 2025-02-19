import { FileText, Minus, Play, Plus } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatDuration } from "@/common/helpers/UtilKit";

const CollapsableCard = ({ curriculum }) => {
  const [isExpend, setIsExpend] = useState(false);

  return (
    <div className="w-full">
      {/* Header */}
      <div
        onClick={() => setIsExpend((prev) => !prev)}
        className="border shadow p-5 bg-white cursor-pointer"
      >
        <div className="flex items-center gap-2">
          {isExpend ? (
            <Minus className="text-gray-700" />
          ) : (
            <Plus className="text-gray-700" />
          )}
          <span className="text-gray-700 text-lg">{curriculum?.title}</span>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpend && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {curriculum?.courselessonlecture_set?.map((item) => (
              <div
                key={item?.uid}
                className="border p-5 bg-gray-50 flex items-center"
              >
                <div className="w-1/2 flex items-center justify-start gap-2">
                  <div>
                    <FileText strokeWidth={1} className="size-4 w-fit" />
                  </div>
                  <p>{item?.title}</p>
                </div>
                <div className="w-1/2 flex items-center justify-end gap-5">
                  {/* <span className="text-sm font-light bg-[#ffe9d1] rounded px-2 py-1">
                    3 questions
                  </span> */}
                  {item?.duration ? (
                    <span className="text-sm font-light bg-[#e8f0fa] rounded px-2 py-1">
                      {formatDuration(item?.duration)}
                    </span>
                  ) : null}

                  <span>
                    <Play strokeWidth={1} className="size-5" />
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsableCard;
