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
import { Swiper, SwiperSlide } from "swiper/react";
import { courses } from "@/lib/options";
import CourseCard from "@/components/cards/CourseCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import CoursePriceInfo from "./components/CoursePriceCard";

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

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    <OverviewTab key="overview" />,
    <CurriculumTab key="curriculum" />,
    // <ReviewsTab key="reviews" />,
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
                  Learn Figma: User Interface Design Essentials - UI/UX Design
                </h4>
                <div className="bg-black/10 p-2 rounded-full inline-block">
                  <Heart className="size-4" strokeWidth={1} />
                </div>
              </div>
              <p className="text-lg">
                Master Figma app to get a job in UI Design, User Interface, User
                Experience design, Web Design & UX design.
              </p>
            </div>
            {/* USER INFO */}
            <div className="flex items-center justify-normal gap-3">
              <div className="border rounded-full p-2">
                <Image
                  src="/images/avatar/avatar-1.jpg"
                  width={68}
                  height={68}
                  alt="User Image"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h6 className="font-medium">Created by</h6>
                <p>Alison down</p>
              </div>
              <div className="flex flex-col gap-1">
                <h6 className="font-medium">Categories</h6>
                <p>Design</p>
              </div>
            </div>
            {/* COURSE VIDEO */}
            <div className="relative overflow-hidden rounded-md">
              {/* <video
                src="/images/products/product-1.jpg"
                className="w-full rounded-md"
              ></video> */}
              <Image
                src="/images/products/product-3.jpg"
                width={2500}
                height={2490}
                alt="Course Image"
                className="rounded-md"
              />
              <div className="bg-white p-2 rounded-full inline-block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                <Play strokeWidth={1} className="size-10" />
              </div>
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
                {/* <button
                  onClick={() => setActiveTab(2)}
                  className={`${
                    activeTab === 2 ? " bg-[#4a8f9f] text-white " : ""
                  } text-xl font-medium px-4 py-2 rounded-md transition-all duration-300`}
                >
                  Reviews
                </button> */}
              </div>
              {/* TAB CONTENT */}
              <div>{tabs[activeTab]}</div>
            </div>
          </div>
          <div className="col-span-1">
            <CoursePriceInfo data={coursePriceInfo} />
          </div>
        </div>
        {/* RELATED COURSES */}
        <div className="py-10">
          <SectionHeader
            title="Related Courses"
            helperText="Discover your perfect program in our courses."
          />
          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {courses.map((item, index) => (
                <SwiperSlide key={index}>
                  <CourseCard cardDetails={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CourseDetails;
