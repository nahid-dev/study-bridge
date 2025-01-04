import BaseFooter from "@/components/BaseFooter";
import BaseNavbar from "@/components/navbars/BaseNavbar";
import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div>
      <BaseNavbar />
      <div className="min-h-screen">{children}</div>
      <BaseFooter />
    </div>
  );
};

export default Dashboard;
