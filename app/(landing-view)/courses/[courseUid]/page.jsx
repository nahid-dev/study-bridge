"use client";
import Container from "@/components/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Heart, Play } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import OverviewTab from "./components/OverviewTab";
import CurriculumTab from "./components/CurriculumTab";
import ReviewsTab from "./components/ReviewsTab";
import SectionHeader from "@/components/SectionHeader";



import CoursePriceInfo from "./components/CoursePriceCard";
import { useQuery } from "@tanstack/react-query";
import APIKit from "@/common/helpers/APIKit";
import RelatedCourseSection from "./components/RelatedCourseSection";

const coursePriceInfo = {
  price: {
    current: "$89.99",
    original: "$99.99",
    discount: "9% OFF",
    note: "2 days left at this price!",
  },
  buttons: {
    buyNow: "Buy Now",
    enroll: "Enroll",
  },
  details: [
    { label: "Duration", value: "43 weeks" },
    { label: "Lectures", value: "32" },
    { label: "Enrolled", value: "1982 students" },
    { label: "Language", value: "English" },
    { label: "Skill level", value: "Beginner" },
    { label: "Deadline", value: "06 April 2020" },
    { label: "Certificate", value: "Yes" },
  ],
  share: "Share this course",
};

const CourseDetails = ({ params }) => {
  const course_uid = params?.courseUid;
  const [activeTab, setActiveTab] = useState(0);

  const { data: courseDetails, isLoading } = useQuery({
    queryKey: ["course-details"],
    queryFn: () =>
      APIKit.public.getCourseDetails(course_uid).then(({ data }) => data),
  });

  const {
    coursedetail = {},
    created_by = {},
    category = {},
  } = courseDetails || {};

  if (isLoading) {
    return "Loading...";
  }
  const tabs = [
    <OverviewTab key="overview" courseDetails={courseDetails} />,
    <CurriculumTab key="curriculum" course_uid={course_uid} />,
    <ReviewsTab key="reviews" course_uid={course_uid} />,
  ];
  return (
    <div className="py-5">
      <Container>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-gray-700" href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-gray-700" href="/courses">
                  Courses
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Course details</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {/* LEFT SIDE */}
          <div className="col-span-2 flex flex-col gap-5">
            {/* COURSE INFO */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <h4 className="text-3xl font-medium w-full">
                  {courseDetails?.title}
                </h4>
                <div className="bg-black/10 p-2 rounded-full inline-block">
                  <Heart className="size-4" strokeWidth={1} />
                </div>
              </div>
              <p className="text-lg">
                {coursedetail?.description.split(" ").slice(0, 20).join(" ")}
              </p>
            </div>
            {/* USER INFO */}
            <div className="flex items-center justify-normal gap-3">
              <div className="border rounded-full p-2">
                <Image
                  src={created_by?.photo_url || "/images/avatar/avatar-1.jpg"}
                  width={68}
                  height={68}
                  alt="User Image"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h6 className="font-medium">Created by</h6>
                <p>
                  {created_by?.first_name} {created_by?.last_name}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h6 className="font-medium">Categories</h6>
                <p>{category?.name || "No category"}</p>
              </div>
            </div>
            {/* COURSE VIDEO */}
            <div className="rounded-md">
              {isLoading ? (
                <div>Loading...</div>
              ) : courseDetails?.video_url ? (
                <iframe
                  className="w-full h-96 rounded-md"
                  src={`https://www.youtube.com/embed/${new URL(
                    courseDetails?.video_url
                  ).searchParams.get("v")}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube Video"
                ></iframe>
              ) : (
                <div>No Video Found!</div>
              )}
            </div>
            {/* COURSE DESCRIPTION */}
            <div className="flex flex-col gap-5">
              {/* TAB LIST */}
              <div className="border p-4 rounded-md bg-white w-full flex items-center gap-8 ">
                <button
                  onClick={() => setActiveTab(0)}
                  className={`${
                    activeTab === 0 ? " bg-[#4a8f9f] text-white " : ""
                  } text-xl font-medium px-4 py-2 rounded-md transition-all duration-300`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab(1)}
                  className={`${
                    activeTab === 1 ? " bg-[#4a8f9f] text-white " : ""
                  } text-xl font-medium px-4 py-2 rounded-md transition-all duration-300`}
                >
                  Curriculum
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`${
                    activeTab === 2 ? " bg-[#4a8f9f] text-white " : ""
                  } text-xl font-medium px-4 py-2 rounded-md transition-all duration-300`}
                >
                  Reviews
                </button>
              </div>
              {/* TAB CONTENT */}
              <div>{tabs[activeTab]}</div>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="col-span-1">
            <CoursePriceInfo courseDetails={courseDetails} />
          </div>
        </div>
        {/* RELATED COURSES */}
        <div className="py-10">
          <SectionHeader
            title="Related Courses"
            helperText="Discover your perfect program in our courses."
          />
          <RelatedCourseSection categoryName={category?.name} />
        </div>
      </Container>
    </div>
  );
};

export default CourseDetails;
