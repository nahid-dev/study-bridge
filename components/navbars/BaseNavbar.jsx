"use client";
import Container from "@/components/Container";
import React, { useState } from "react";
import MainLogo from "../MainLogo";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  FileText,
  LogOut,
  Menu,
  ShoppingBag,
  UserCircleIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import RightSideDrawer from "../sidebars/RightSideDrawer";
import AuthenticationDrawer from "../drawer/AuthenticationDrawer";
import MobileNavbar from "./MobileNavbar";
import CartDrawer from "../drawer/CartDrawer";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { inject, observer } from "mobx-react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Courses", href: "/courses" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const BaseNavbar = ({ meStore }) => {
  const pathName = usePathname();
  const { me } = meStore;
  const [isLoginSidebarOpen, setIsLoginSidebarOpen] = useState(false);
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);
  const [isOpenCartDrawer, setIsOpenCartDrawer] = useState(false);

  const hasToken = localStorage.getItem("@AUTH_TOKEN");

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
          <div>
            {!!hasToken ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="size-[40px] rounded-full cursor-pointer">
                    <Image
                      src="/images/avatar/avatar-1.jpg"
                      alt="User image"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 border p-3 space-y-3 shadow-lg bg-white rounded-md absolute right-0"
                  alignOffset={-5}
                  sideOffset={8}
                  style={{
                    maxHeight: "80vh",
                    overflowY: "auto",
                    zIndex: 50,
                    position: "relative",
                  }}
                >
                  <DropdownMenuLabel className="text-gray-700 font-semibold bg-gray-50 p-3">
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-200" />
                  <DropdownMenuGroup className="flex flex-col gap-3">
                    <DropdownMenuItem className="border p-3 rounded-md hover:bg-gray-50 transition-all duration-200 cursor-pointer flex items-center gap-3 focus:bg-gray-50 focus:text-gray-900">
                      <FileText className="size-5" /> <span>My courses</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="border p-3 rounded-md hover:bg-gray-50 transition-all duration-200 cursor-pointer flex items-center gap-3 focus:bg-gray-50 focus:text-gray-900">
                      <LogOut className="size-5" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <UserCircleIcon
                onClick={() => setIsLoginSidebarOpen((prev) => !prev)}
                className="size-6 hover:text-primary cursor-pointer"
              />
            )}

            {/* <ShoppingBag
              onClick={() => setIsOpenCartDrawer(true)}
              className="size-6 hover:text-primary cursor-pointer"
            /> */}
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
      <RightSideDrawer
        isOpen={isOpenCartDrawer}
        setIsOpen={setIsOpenCartDrawer}
      >
        <CartDrawer setIsOpenCartDrawer={setIsOpenCartDrawer} />
      </RightSideDrawer>
    </div>
  );
};

export default inject("meStore")(observer(BaseNavbar));
