"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import CourseCard from "@/components/cards/CourseCard";
import APIKit from "@/common/helpers/APIKit";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const HeroSection = () => {
  const [params, setParams] = useState({
    category_name: "",
    search: "",
  });
  const { data, isLoading } = useQuery({
    queryKey: ["/courses"],
    queryFn: () =>
      APIKit.public.getCourses({ params: params }).then(({ data }) => data),
  });

  const cardDetails = isLoading || data[0];
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('/images/covers/cover-1.jpg')] h-full">
            <div
              style={{
                background:
                  "linear-gradient(0deg, rgba(9, 7, 97, .6), rgba(9, 7, 97, .6)), linear-gradient(270deg, #090761 17.76%, rgba(255, 255, 255, 0) 100%)",
              }}
              className="h-full grid grid-cols-3 lg:px-20"
            >
              <div className="col-span-2 flex flex-col justify-center gap-4">
                <h1 className="text-6xl font-medium text-white">
                  Self Education Resource And Infos
                </h1>
                <p className="capitalize">
                  Technology is bring a massive wave of evaluation on learning
                  things on different ways.
                </p>
                <div className="flex gap-4 w-full">
                  <Button variant="outline" className="px-10">
                    Get Started
                  </Button>
                  <Button
                    asChild
                    className="px-10 bg-[#146ecf] text-white hover:bg-[#0f5fba]"
                  >
                    <Link href="/courses">View Courses</Link>
                  </Button>
                </div>
              </div>
              <div className="col-span-1 flex items-center">
                <CourseCard cardDetails={cardDetails} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/covers/cover-4.jpg')] h-full">
            <div
              style={{
                background:
                  "linear-gradient(0deg, rgba(9, 7, 97, .6), rgba(9, 7, 97, .6)), linear-gradient(270deg, #090761 17.76%, rgba(255, 255, 255, 0) 100%)",
              }}
              className="h-full grid grid-cols-3 lg:px-20"
            >
              <div className="col-span-2 flex flex-col justify-center gap-4">
                <h1 className="text-6xl font-medium text-white">
                  Self Education Resource And Infos
                </h1>
                <p className="capitalize">
                  Technology is bring a massive wave of evaluation on learning
                  things on different ways.
                </p>
                <div className="flex gap-4 w-full">
                  <Button variant="outline" className="px-10">
                    Get Started
                  </Button>
                  <Button
                    asChild
                    className="px-10 bg-[#146ecf] text-white hover:bg-[#0f5fba]"
                  >
                    <Link href="/courses">View Courses</Link>
                  </Button>
                </div>
              </div>
              <div className="col-span-1 flex items-center">
                <CourseCard cardDetails={cardDetails} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/covers/cover-7.jpg')] h-full">
            <div
              style={{
                background:
                  "linear-gradient(0deg, rgba(9, 7, 97, .6), rgba(9, 7, 97, .6)), linear-gradient(270deg, #090761 17.76%, rgba(255, 255, 255, 0) 100%)",
              }}
              className="h-full grid grid-cols-3 lg:px-20"
            >
              <div className="col-span-2 flex flex-col justify-center gap-4">
                <h1 className="text-6xl font-medium text-white">
                  Self Education Resource And Infos
                </h1>
                <p className="capitalize">
                  Technology is bring a massive wave of evaluation on learning
                  things on different ways.
                </p>
                <div className="flex gap-4 w-full">
                  <Button variant="outline" className="px-10">
                    Get Started
                  </Button>
                  <Button
                    asChild
                    className="px-10 bg-[#146ecf] text-white hover:bg-[#0f5fba]"
                  >
                    <Link href="/courses">View Courses</Link>
                  </Button>
                </div>
              </div>
              <div className="col-span-1 flex items-center">
                <CourseCard cardDetails={cardDetails} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
