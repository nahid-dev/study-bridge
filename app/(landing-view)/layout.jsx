import React from "react";
import dynamic from "next/dynamic";
import BaseFooter from "@/components/BaseFooter";
// import BaseNavbar from "@/components/navbars/BaseNavbar";
// import BaseNavbar from "@/components/navbars/BaseNavbar";
// const BaseNavbar = dynamic(() => import("@/components/navbars/BaseNavbar"), {
const BaseNavbar = dynamic(() => import("@/components/navbars/BaseNavbar"), {
  ssr: false,
});

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
