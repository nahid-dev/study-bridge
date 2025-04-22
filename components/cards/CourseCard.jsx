import { BookUser, Clock1Icon, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import StarRating from "../StarRating";
import Link from "next/link";
import { formatDuration, formatTime } from "@/common/helpers/UtilKit";

const CourseCard = ({ cardDetails }) => {
  const { created_by, coursedetail } = cardDetails || {};

  return (
    <Link
      href={`/courses/${cardDetails?.uid}`}
      className="shadow rounded-md p-2 bg-white cursor-pointer group"
    >
      <div className="space-y-3">
        <div className="rounded-md overflow-hidden h-64">
          <Image
            src={cardDetails?.image_url || "/images/cards/photo-35.jpg"}
            width={650}
            height={650}
            alt="Course Image"
            className="rounded-md group-hover:scale-110 transform transition-all duration-300 h-full"
          />
        </div>
        {/* content */}
        <div className="flex flex-col gap-3 p-1 relative">
          {/* user image */}
          <div className="w-16 absolute -top-12 right-5">
            <Image
              src={created_by?.photo_url || "/images/avatar/avatar-1.jpg"}
              width={60}
              height={60}
              alt="User Image"
              className="rounded-full object-cover border-4 border-white"
            />
          </div>
          <p>{cardDetails?.category?.name || "Category"}</p>
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
                <span>
                  {" "}
                  {formatDuration(cardDetails?.total_duration || "00:00:00") ||
                    0}
                </span>
              </p>
            </div>
            <div>
              <p>
                $ <span className="line-through">{coursedetail?.price}</span>
              </p>
              <h6 className="text-xl font-semibold">
                ${coursedetail?.actual_price}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
