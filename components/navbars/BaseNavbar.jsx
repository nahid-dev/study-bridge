"use client";
import Container from "@/components/Container";
import React, { useState } from "react";
import MainLogo from "../MainLogo";
import { Button } from "../ui/button";
import Link from "next/link";
import { Menu, ShoppingBag, UserCircleIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import RightSideDrawer from "../sidebars/RightSideDrawer";
import AuthenticationDrawer from "../modals/AuthenticationDrawer";
import MobileNavbar from "./MobileNavbar";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Courses", href: "/courses" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const BaseNavbar = () => {
  const pathName = usePathname();
  const [isLoginSidebarOpen, setIsLoginSidebarOpen] = useState(false);
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="bg-gray-100">
      <Container>
        <div className="py-5 flex items-center justify-between">
          <div>
            <MainLogo />
          </div>
          <div className="hidden sm:block">
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
          <div className="block sm:hidden">
            <Menu
              onClick={() => setOpenMobileMenu(true)}
              className="size-6 cursor-pointer"
            />
          </div>
        </div>
      </Container>

      <RightSideDrawer
        isOpen={isLoginSidebarOpen}
        setIsOpen={setIsLoginSidebarOpen}
      >
        <AuthenticationDrawer setIsOpen={setIsLoginSidebarOpen} />
      </RightSideDrawer>

      <RightSideDrawer isOpen={isOpenMobileMenu} setIsOpen={setOpenMobileMenu}>
        <MobileNavbar
          navItems={navItems}
          setOpenMobileMenu={setOpenMobileMenu}
        />
      </RightSideDrawer>
    </div>
  );
};

export default BaseNavbar;
