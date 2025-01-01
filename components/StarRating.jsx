"use client";

import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Rating from "react-rating";

const StarRating = ({
  initialRating = 0,
  onRatingChange,
  starCount = 5,
  readonly = false,
  showRatingInfo,
}) => {
  const [rating, setRating] = useState(initialRating);

  return (
    <div className="flex items-center gap-1 pt-[3px] whitespace-nowrap">
      <Rating
        initialRating={rating}
        emptySymbol={
          <StarIcon
            className={`w-5 h-5 text-gray-300 ${
              !readonly && "hover:text-gray-400"
            }`}
          />
        }
        fullSymbol={<StarIcon className="w-5 h-5 text-yellow-500" />}
        onChange={(newRating) => {
          setRating(newRating);
          if (onRatingChange) onRatingChange(newRating);
        }}
        fractions={2}
        starCount={starCount}
        readonly={readonly}
      />

      {showRatingInfo && (
        <span className="mb-1 text-sm">
          {rating} / {starCount}
        </span>
      )}
    </div>
  );
};

export default StarRating;
