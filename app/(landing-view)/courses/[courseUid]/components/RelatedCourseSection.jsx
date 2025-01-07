import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "@/components/cards/CourseCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import APIKit from "@/common/helpers/APIKit";
import { courses } from "@/lib/options";

const RelatedCourseSection = ({ categoryName }) => {
  const [params, setParams] = useState({
    category_name: categoryName,
  });
  const { data, isLoading } = useQuery({
    queryKey: ["/courses"],
    queryFn: () =>
      APIKit.public.getCourses({ params: params }).then(({ data }) => data),
  });

  if (isLoading) {
    return "Loading...";
  }
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <CourseCard cardDetails={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedCourseSection;
