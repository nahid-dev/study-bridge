import React from "react";
import MainLogo from "../MainLogo";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNavbar = ({ navItems, setOpenMobileMenu }) => {
  const pathName = usePathname();
  return (
    <div>
      <div className="flex items-center justify-between">
        <MainLogo />
        <div>
          <X
            strokeWidth={3}
            onClick={() => setOpenMobileMenu(false)}
            className="size-6 cursor-pointer"
          />
        </div>
      </div>

      {/* Nav Items */}
      <ul className="flex flex-col gap-3 mt-5">
        {navItems?.map((item, index) => (
          <li key={index} className=" flex items-center justify-start gap-2">
            <Link onClick={() => setOpenMobileMenu(false)} href={item.href}>
              {item.title}
            </Link>
            {pathName === item.href && (
              <div className="size-[6px] rounded-full bg-primary"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavbar;
