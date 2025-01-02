import { cn } from "@/lib/utils";
import React from "react";
import Container from "./Container";

const SectionHeader = ({
  title = "",
  helperText = "",
  customClassName = "",
}) => {
  return (
    <Container>
      <div className={cn("flex flex-col gap-2 items-center", customClassName)}>
        <h2 className="text-[30px] capitalize font-medium text-accent">
          {title}
        </h2>
        <p className="capitalize text-lg">{helperText}</p>
      </div>
    </Container>
  );
};

export default SectionHeader;
