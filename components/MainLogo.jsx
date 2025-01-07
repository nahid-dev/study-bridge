import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";

const MainLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <GraduationCap strokeWidth={2} className="size-10 text-primary" />
      <h4 className="text-base md:text-2xl font-bold truncate">
        Language<span className="text-primary">Learning</span>
      </h4>
    </Link>
  );
};

export default MainLogo;
