"use client";
import { Button } from "@/components/ui/button";
import React from "react";
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

const HeroSection = () => {
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
              className="h-full grid grid-cols-3"
            >
              <div className="col-span-2 flex flex-col justify-center mx-auto max-w-4xl">
                <h1 className="">Self Education Resource And Infos</h1>
                <p className="capitalize">
                  Technology is bring a massive wave of evaluation on learning
                  things on different ways.
                </p>
                <div className="flex gap-4">
                  <Button>Get Started</Button>
                  <Button>View Courses</Button>
                </div>
              </div>
              <div className="col-span-1">
                <CourseCard />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/covers/cover-4.jpg"
            width={1440}
            height={1440}
            alt="Cover image 2"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/covers/cover-7.jpg"
            width={1440}
            height={1440}
            alt="Cover image 3"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
