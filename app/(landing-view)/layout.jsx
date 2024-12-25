import BaseNavbar from "@/components/navbars/BaseNavbar";
import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <BaseNavbar />
      {children}
    </div>
  );
};

export default BaseLayout;
