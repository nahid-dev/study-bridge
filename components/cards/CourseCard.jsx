import { BookUser, Clock1Icon, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import StarRating from "../StarRating";

const CourseCard = ({ cardDetails }) => {
  console.log(cardDetails);
  return (
    <div className="shadow rounded-md p-2 bg-white cursor-pointer group">
      <div className="space-y-3">
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={cardDetails?.image}
            width={650}
            height={650}
            alt="Course Image"
            className="rounded-md group-hover:scale-105 transform transition-all duration-300"
          />
          {/* user image */}
          <div className="w-16 absolute -bottom-6 right-6">
            <Image
              src={cardDetails?.userImage}
              width={40}
              height={40}
              alt="User Image"
              className="rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col gap-3 p-1">
          <p>{cardDetails?.tag}</p>
          <h6 className="text-lg font-medium">{cardDetails?.title}</h6>
          <StarRating initialRating={cardDetails?.rating} readonly />
          <div className="flex items-end gap-1 justify-between">
            <div className="flex gap-2">
              <p>
                <span className="flex items-center gap-1">
                  <BookUser className="size-4" strokeWidth={1} />
                  <span>{cardDetails?.lessons} lesions</span>
                </span>
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <Clock1Icon className="size-4" strokeWidth={1} />
                </span>
                <span> {cardDetails?.duration}</span>
              </p>
            </div>
            <div>
              <p>
                $ <span className="line-through">{cardDetails?.discount}</span>
              </p>
              <h6 className="text-xl font-semibold">${cardDetails?.price}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
