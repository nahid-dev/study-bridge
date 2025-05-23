"use client";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { PlayCircle, Quote } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import React, { useState } from "react";
import CountUp from "react-countup";
import WhyStudySection from "../components/WhyStudySection";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { studentTestimonials } from "@/lib/options";

const AboutPage = () => {
  return (
    <div className="my-10">
      <SectionHeader
        title="Our goals. Our mission."
        helperText="Our focus is always on finding the best people to work with. Our bar is high."
      />

      <Container>
        <div className="w-4/5 mx-auto text-center">
          Convallis vitae, nunc ut venenatis, lectus. Tellus nunc orci dolor nec
          facilisis et lacus, eu aliquet. Amet imperdiet ac venenatis, lacus.
          Tortor interdum quisque et, eu etiam ac. Hac lectus at posuere est
          consequat euismod tellus ut. Dolor ut diam sed dignissim eget gravida.
          Lectus mattis hac vitae, sed quis vel ornare sed. Ut vel cursus sed id
          eu. Laoreet bibendum eget dui sapien bibendum sapien.
        </div>

        <div className="relative w-full h-[400px] mt-10">
          <Image
            width={1920}
            height={1080}
            src={
              "https://images.unsplash.com/photo-1673515334669-1e445e4f4c3f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="About us"
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="w-full h-full top-0 left-0 bg-black opacity-30 absolute rounded-lg"></div>

          <Dialog>
            <DialogTrigger>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 cursor-pointer">
                <PlayCircle strokeWidth={1} className="size-20 text-white" />
              </div>
            </DialogTrigger>
            <DialogContent className="p-2">
              <div>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/qYsHLUAlH_8?si=eC3OcrHWU8N2ge2d"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex justify-around flex-wrap text-center py-10 mt-10 ">
          <div className="w-1/2 sm:w-1/4 mb-6">
            <h2 className="text-3xl font-bold ">
              <CountUp end={1200} duration={5} /> +
            </h2>
            <p className="text-foreground mt-2">Live Language Events</p>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-6">
            <h2 className="text-3xl font-bold ">
              <CountUp end={950} duration={5} />+
            </h2>
            <p className="text-foreground mt-2">Certified Tutors</p>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-6">
            <h2 className="text-3xl font-bold ">
              <CountUp end={35} duration={5} />
              k+
            </h2>
            <p className="text-foreground mt-2">Interactive Courses</p>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-6">
            <h2 className="text-3xl font-bold ">
              <CountUp end={75} duration={5} />
              k+
            </h2>
            <p className="text-foreground mt-2">Global Learners</p>
          </div>
        </div>
        <WhyStudySection />
        <div className="pt-12">
          <SectionHeader
            title="What Our Students Have To Say"
            helperText="Discover Your Perfect Program In Our Courses."
          />
          <div className="mt-10">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper pt-5"
            >
              {studentTestimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="border rounded-lg bg-gray-100 p-10 m-5 ">
                    <div className="relative flex flex-col items-center">
                      <div className="size-20 mb-4">
                        <Image
                          src={testimonial?.image}
                          alt="Student"
                          width={1080}
                          height={1080}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <Quote className="size-10 absolute top-0 right-0" />
                      <div>
                        <h2 className="text-center my-5 text-lg font-semibold">
                          {testimonial.name}
                        </h2>
                        <p>{testimonial.role}</p>
                      </div>
                      <div>
                        <p className="text-center text-foreground">
                          {testimonial.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
