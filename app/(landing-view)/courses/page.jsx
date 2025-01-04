import CourseCard from "@/components/cards/CourseCard";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

const courses = [
  {
    uid: 1,
    title: "Fashion Photography From Professional",
    tag: "Photography",
    image: "/images/products/product-1.jpg",
    userImage: "/images/avatar/avatar-1.jpg",
    rating: 4,
    lessons: 12,
    duration: "8min",
    price: 415.99,
    discount: 959,
  },
  {
    uid: 2,
    title: "Fashion Photography From Professional",
    tag: "Photography",
    image: "/images/products/product-2.jpg",
    userImage: "/images/avatar/avatar-2.jpg",
    rating: 4,
    lessons: 12,
    duration: "8min",
    price: 415.99,
    discount: 959,
  },
  {
    uid: 3,
    title: "Fashion Photography From Professional",
    tag: "Photography",
    image: "/images/products/product-3.jpg",
    userImage: "/images/avatar/avatar-3.jpg",
    rating: 4,
    lessons: 12,
    duration: "8min",
    price: 415.99,
    discount: 959,
  },
  {
    uid: 4,
    title: "Fashion Photography From Professional",
    tag: "Photography",
    image: "/images/products/product-4.jpg",
    userImage: "/images/avatar/avatar-4.jpg",
    rating: 4,
    lessons: 12,
    duration: "8min",
    price: 415.99,
    discount: 959,
  },
  {
    uid: 5,
    title: "Fashion Photography From Professional",
    tag: "Photography",
    image: "/images/products/product-5.jpg",
    userImage: "/images/avatar/avatar-5.jpg",
    rating: 4,
    lessons: 12,
    duration: "8min",
    price: 415.99,
    discount: 959,
  },
  {
    uid: 6,
    title: "Fashion Photography From Professional",
    tag: "Photography",
    image: "/images/products/product-6.jpg",
    userImage: "/images/avatar/avatar-6.jpg",
    rating: 4,
    lessons: 12,
    duration: "8min",
    price: 415.99,
    discount: 959,
  },
  {
    uid: 7,
    title: "Fashion Photography From Professional",
    tag: "Photography",
    image: "/images/products/product-3.jpg",
    userImage: "/images/avatar/avatar-3.jpg",
    rating: 4,
    lessons: 12,
    duration: "8min",
    price: 415.99,
    discount: 959,
  },
  {
    uid: 8,
    title: "Fashion Photography From Professional",
    tag: "Photography",
    image: "/images/products/product-4.jpg",
    userImage: "/images/avatar/avatar-4.jpg",
    rating: 4,
    lessons: 12,
    duration: "8min",
    price: 415.99,
    discount: 959,
  },
  {
    uid: 9,
    title: "Fashion Photography From Professional",
    tag: "Photography",
    image: "/images/products/product-5.jpg",
    userImage: "/images/avatar/avatar-5.jpg",
    rating: 4,
    lessons: 12,
    duration: "8min",
    price: 415.99,
    discount: 959,
  },
];

const CoursesPage = () => {
  return (
    <div className="mt-20">
      <SectionHeader
        title="Courses"
        helperText="Here are the Courses we offer"
      />
      <div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
            {courses.map((item, index) => (
              <CourseCard key={index} cardDetails={item} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CoursesPage;
