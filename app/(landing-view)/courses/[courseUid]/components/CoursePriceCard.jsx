import { Button } from "@/components/ui/button";
import React from "react";

const CoursePriceInfo = ({ data }) => {
  const { price, buttons, details, share } = data;

  return (
    <div className="border rounded-md shadow p-10 bg-white">
      {/* Price Section */}
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <h6 className="text-3xl font-medium">{price.current}</h6>
          {/* <span className="text-gray-500 line-through">{price.original}</span> */}
          {/* <span className="text-sm font-medium text-purple-700 bg-purple-100 rounded px-2 py-0.5">
            {price.discount}
          </span> */}
        </div>
        {/* <p className="text-sm text-red-500 mt-1">{price.note}</p> */}
      </div>

      {/* Buttons Section */}
      <div className="mb-4 flex flex-col gap-5">
        <Button className="w-full font-semibold">{buttons.buyNow}</Button>
        <Button className="w-full bg-[#ffc78b] hover:bg-[#d6b693] text-gray-700 hover:text-gray-700 font-semibold ">
          {buttons.enroll}
        </Button>
      </div>

      {/* Details Section */}
      <ul className="mb-4 space-y-2">
        {details.map((detail, index) => (
          <li
            key={index}
            className={`${
              details?.length - 1 === index ? "" : "border-b"
            } flex justify-between text-gray-700 text-sm font-semibold pb-2`}
          >
            <span>{detail.label}</span>
            <span>{detail.value}</span>
          </li>
        ))}
      </ul>

      {/* Share Section */}
      {/* <div className="text-center text-blue-600 text-sm font-medium cursor-pointer">
        {share}
      </div> */}
    </div>
  );
};

// const CourseCardContainer = () => {
//   const courseData = {
//     price: {
//       current: "$89.99",
//       original: "$99.99",
//       discount: "9% OFF",
//       note: "2 days left at this price!",
//     },
//     buttons: {
//       buyNow: "Buy Now",
//       enroll: "Enroll",
//     },
//     details: [
//       { label: "Duration", value: "43 weeks" },
//       { label: "Lectures", value: "32" },
//       { label: "Enrolled", value: "1982 students" },
//       { label: "Language", value: "English" },
//       { label: "Skill level", value: "Beginner" },
//       { label: "Deadline", value: "06 April 2020" },
//       { label: "Certificate", value: "Yes" },
//     ],
//     share: "Share this course",
//   };

//   return <CoursePriceCard data={courseData} />;
// };

export default CoursePriceInfo;
