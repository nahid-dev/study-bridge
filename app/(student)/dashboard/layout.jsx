import BaseFooter from "@/components/BaseFooter";
import BaseNavbar from "@/components/navbars/BaseNavbar";
import StudentAuthGuardHOC from "@/components/StudentAuthGuardHOC";
import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div>
      <StudentAuthGuardHOC>
        <BaseNavbar />
        <div className="min-h-screen">{children}</div>
        <BaseFooter />
      </StudentAuthGuardHOC>
    </div>
  );
};

export default Dashboard;
