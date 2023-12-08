import { cn } from "@/lib/shadcn-utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Sidebar from "./Sidebar";
import CardRegister from "../CardRegister";

const Navbar = () => {
  const { pathname } = useRouter();

  const isCurrentPath = (path: string) => path === pathname;

  const navigation = [
    {
      name: "Services",
      href: "/services",
      current: isCurrentPath("/services"),
    },
    {
      name: "About Us",
      href: "/about_us",
      current: isCurrentPath("/about_us"),
    },
    {
      name: "Virtual Secretary",
      href: "/virtual_secretary",
      current: isCurrentPath("/virtual_secretary"),
    },
  ];

  return (
    <div className="flex fixed z-50 w-full justify-between items-center px-2 md:px-8 py-3 bg-gray-700 shadow-gray-400 shadow-md">
      <div className="flex gap-4 md:gap-8 items-center">
        <Sidebar items={navigation} />

        <Link href={"/"} className="flex -translate-y-1 hover:scale-105">
          <Image src={"/logo-em.png"} width={70} height={35} alt="logo-em" priority />
        </Link>
      </div>
      <div className="hidden md:flex gap-2">
        {navigation.map((navItem) => (
          <Link
            key={navItem.name}
            className={cn(
              "text-center text-gray-300 font-thin px-2 hover:text-white",
              navItem.current && "scale-105 text-white font-normal"
            )}
            href={`${navItem.href}`}
          >
            {navItem.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <button className="hover:scale-105">
          <Image src={"/search-svgrepo-com.svg"} width={28} height={28} alt="logo-em" priority />
        </button>

        <CardRegister />

        <button className="hover:scale-110">
          <Image src={"/dots-3-vertical-svgrepo-com.svg"} width={20} height={20} alt="logo-em" priority />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

export interface INavigation {
  name: string;
  href: string;
  current: boolean;
}
