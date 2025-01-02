/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React from "react";

const StudentsSay = [
  {
    id: 1,
    name: "Albert Cole",
    role: "Designer",
    image: "/images/avatar/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Albert Cole",
    role: "Developer",
    image: "/images/avatar/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Albert Cole",
    role: "Human resource",
    image: "/images/avatar/avatar-3.jpg",
  },
];

const StudentsSaySection = () => {
  return (
    <div className="bg-tertiary py-20 px-4">
      <SectionHeader
        title="What Our Students Have To Say"
        helperText="Discover your perfect program in our courses."
      />
      <Container>
        <div>
          <p className=" text-center text-xl">
            I believe in lifelong learning and Skola is a great place to learn
            from experts. I've learned a lot and recommend it to all my
            friends.Programs are available in fall, spring, and summer
            semesters. Many fall and spring programs offer similar shorter
            programs in the summer, and some may be combined for a full academic
            year.
          </p>
          <div className="py-5 flex items-center gap-10">
            {StudentsSay.map((student) => (
              <div
                key={student?.id}
                className="bg-white p-3 rounded-full flex items-center gap-5"
              >
                <Image
                  src={student?.image}
                  alt="student"
                  className="w-20 h-20 rounded-full"
                  height={80}
                  width={80}
                />
                <div className="px-10">
                  <h3 className="text-accent font-semibold text-xl">
                    {student?.name}
                  </h3>
                  <p className="capitalize text-center">{student?.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StudentsSaySection;
