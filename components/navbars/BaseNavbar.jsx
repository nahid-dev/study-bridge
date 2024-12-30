"use client";
import Container from "@/components/Container";
import React, { useState } from "react";
import MainLogo from "../MainLogo";
import { Button } from "../ui/button";
import Link from "next/link";
import { ShoppingBag, UserCircleIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import RightSideDrawer from "../sidebars/RightSideDrawer";
import LoginModal from "../modals/LoginModal";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Courses", href: "/courses" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const BaseNavbar = () => {
  const pathName = usePathname();
  const [isLoginSidebarOpen, setIsLoginSidebarOpen] = useState(true);

  return (
    <div className="bg-gray-100">
      <Container>
        <div className="py-3 flex items-center justify-between">
          <div>
            <MainLogo />
          </div>
          <div>
            <ul>
              {navItems.map((item) => (
                <li key={item.title} className="inline-block mx-4 ">
                  <Link href={item.href}>{item.title}</Link>
                  {pathName === item.href && (
                    <div className="size-[6px] mx-auto rounded-full bg-primary"></div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <UserCircleIcon
              onClick={() => setIsLoginSidebarOpen((prev) => !prev)}
              className="size-6 hover:text-primary hover:cursor-pointer"
            />
            <ShoppingBag className="size-6" />
          </div>
        </div>
      </Container>

      <RightSideDrawer
        isOpen={isLoginSidebarOpen}
        setIsOpen={setIsLoginSidebarOpen}
      >
        <LoginModal setIsOpen={setIsLoginSidebarOpen} />
      </RightSideDrawer>
    </div>
  );
};

export default BaseNavbar;
