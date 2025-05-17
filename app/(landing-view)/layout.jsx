import BaseFooter from "@/components/BaseFooter";
import BaseNavbar from "@/components/navbars/BaseNavbar";
import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <BaseNavbar />
      <div>{children}</div>
      <BaseFooter />
    </div>
  );
};

export default BaseLayout;
