import BaseFooter from "@/components/BaseFooter";
import BaseNavbar from "@/components/navbars/BaseNavbar";
import StudentAuthGuardHOC from "@/components/StudentAuthGuardHOC";
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
