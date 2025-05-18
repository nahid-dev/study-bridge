import React from "react";
import BaseFooter from "@/components/BaseFooter";
import BaseNavbar from "@/components/navbars/BaseNavbar";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <BaseNavbar />
      {children}
      <BaseFooter />
    </div>
  );
};

export default BaseLayout;
