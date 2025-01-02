import SecondaryCard from "@/components/cards/SecondaryCard";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { FileTerminal, Repeat2, Section, UserCog } from "lucide-react";
import React from "react";
const whyStudyItems = [
  {
    title: "Learn Anytime",
    description: "Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.",
    icon: FileTerminal,
    color: "text-orange-600",
    bg: "bg-orange-100",
    border: "border-orange-600",
  },
  {
    title: "Flexible Learning",
    description: "Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.",
    icon: Repeat2,
    color: "text-blue-600",
    bg: "bg-blue-100",
    border: "border-blue-600",
  },
  {
    title: "Learn With Experts",
    description: "Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.",
    icon: UserCog,
    color: "text-green-600",
    bg: "bg-green-100",
    border: "border-green-600",
  },
];

const WhyStudySection = () => {
  return (
    <div className="bg-tertiary py-20 px-4">
      <SectionHeader
        title="Why study with Language learning"
        helperText="Discover your perfect programme in our course"
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10">
          {whyStudyItems.map((item, index) => (
            <SecondaryCard key={index} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyStudySection;
