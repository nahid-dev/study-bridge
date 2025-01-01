import { BookUser, Clock1Icon, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import StarRating from "../StarRating";

const CourseCard = () => {
  return (
    <div className="shadow rounded-md p-2 bg-white">
      <div>
        <Image
          src="/images/cards/photo-35.jpg"
          width={200}
          height={200}
          alt="Course Image"
        />
        {/* user image */}
        <div>
          <Image
            src="/images/avatars/avatar-1.jpg"
            width={40}
            height={40}
            alt="User Image"
          />
        </div>
        {/* content */}
        <div className="flex flex-col gap-3">
          <p>Photography</p>
          <h6 className="text-lg font-semibold">
            Fashion photography from professional
          </h6>
          <StarRating initialRating={0} />
          <div className="flex items-end gap-1 justify-between">
            <div>
              <p>
                <span>
                  <BookUser className="size-4" strokeWidth={1} />
                  lesions
                </span>
              </p>
              <p>
                <span>
                  <Clock1Icon className="size-4" strokeWidth={1} />
                </span>
                12h 8min
              </p>
            </div>
            <div>
              <p className="text-clip">$959</p>
              <h6 className="text-xl">$415.99</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
