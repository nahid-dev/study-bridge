import BaseFooter from "@/components/BaseFooter";
// import BaseNavbar from "@/components/navbars/BaseNavbar";
const BaseNavbar = dynamic(
  () => import("@/components/navbars/BaseNavbar"),
  {
    ssr: false,
  }
);
import dynamic from "next/dynamic";
// import StudentAuthGuardHOC from "@/components/StudentAuthGuardHOC";
const StudentAuthGuardHOC = dynamic(
  () => import("@/components/StudentAuthGuardHOC"),
  {
    ssr: false,
  }
);
import React, { Suspense } from "react";

const Dashboard = ({ children }) => {
  return (
    <Suspense>
      <div>
        <StudentAuthGuardHOC>
          <BaseNavbar />
          <div className="min-h-screen">{children}</div>
          <BaseFooter />
        </StudentAuthGuardHOC>
      </div>
    </Suspense>
  );
};

export default Dashboard;
