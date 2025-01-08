import APIKit from "@/common/helpers/APIKit";
import { formatDuration } from "@/common/helpers/UtilKit";
import ConfirmationModal from "@/components/ConfrimationModal";
import AuthenticationDrawer from "@/components/drawer/AuthenticationDrawer";
import RightSideDrawer from "@/components/sidebars/RightSideDrawer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CoursePriceInfo = ({ courseDetails }) => {
  const { coursedetail = {} } = courseDetails;
  const router = useRouter();
  const [isConfirmEnroll, setIsConfirmEnroll] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const details = [
    {
      label: "Duration",
      value: formatDuration(courseDetails?.total_duration || "00:00:00"),
    },
    { label: "Lectures", value: courseDetails?.total_lectures },
    { label: "Enrolled", value: courseDetails?.total_enrollment || 0 },
    { label: "Language", value: coursedetail?.language },
    { label: "Skill level", value: coursedetail?.skill_level },
    { label: "Deadline", value: coursedetail?.deadline },
    { label: "Certificate", value: coursedetail?.certificate },
  ];

  const handleCloseConfirmationModal = () => {
    setIsConfirmEnroll(false);
  };

  const handleConfirmEnroll = () => {
    APIKit.public
      .postEnrollCourse(courseDetails?.uid)
      .then(() => {
        toast.success("Successfully enrolled course!");
        router.push("/dashboard/my-courses");
      })
      .catch((error) => {
        if (error.status === 401) {
          setIsOpenLoginModal(true);
        }
      });
  };

  return (
    <div className="border rounded-md shadow p-10 bg-white">
      {/* Price Section */}
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <h6 className="text-3xl font-medium">
            ${coursedetail?.actual_price}
          </h6>
          {/* <span className="text-gray-500 line-through">{price.original}</span> */}
          {/* <span className="text-sm font-medium text-purple-700 bg-purple-100 rounded px-2 py-0.5">
            {price.discount}
          </span> */}
        </div>
        {/* <p className="text-sm text-red-500 mt-1">{price.note}</p> */}
      </div>

      {/* Buttons Section */}
      <div className="mb-4 flex flex-col gap-5">
        <Button className="w-full font-semibold">Buy Now</Button>
        <Button
          onClick={() => setIsConfirmEnroll(true)}
          className="w-full bg-[#ffc78b] hover:bg-[#d6b693] text-gray-700 hover:text-gray-700 font-semibold "
        >
          Enroll
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
            <span>{detail?.label}</span>
            <span>{detail?.value}</span>
          </li>
        ))}
      </ul>
      <ConfirmationModal
        isOpen={isConfirmEnroll}
        closeModal={handleCloseConfirmationModal}
        onConfirm={handleConfirmEnroll}
      />

      <RightSideDrawer
        isOpen={isOpenLoginModal}
        setIsOpen={setIsOpenLoginModal}
      >
        <AuthenticationDrawer setIsOpen={setIsOpenLoginModal} />
      </RightSideDrawer>
    </div>
  );
};

export default CoursePriceInfo;
