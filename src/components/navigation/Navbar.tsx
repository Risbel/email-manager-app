import { cn } from "@/lib/shadcn-utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Sidebar from "./Sidebar";
import CardRegister from "../CardRegister";
import useHandleScroll from "@/hooks/useHandleScroll";

const Navbar = () => {
  const { handleScroll, currentSection } = useHandleScroll();
  const { pathname } = useRouter();

  const isCurrentPath = (path: any) => path === pathname || path === currentSection;

  const navigation = [
    // {
    //   type: "scrolling",
    //   name: "Services",
    //   href: "#services",
    //   current: isCurrentPath("services"),
    // },
    {
      name: "Home",
      href: "/",
      current: isCurrentPath("/"),
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
    <div className="flex fixed z-50 w-full justify-between items-center px-2 md:px-8 py-3 bg-primary shadow-silverdark shadow-md">
      <div className="flex gap-4 md:gap-8 items-center">
        <Sidebar items={navigation} />

        <Link href={"/"} className="flex">
          <Image src={"/white-horizontal-logo.svg"} width={70} height={35} alt="logo-em" priority />
        </Link>
      </div>
      <div className="hidden md:flex gap-2">
        {navigation.map((navItem): any => (
          <Link
            key={navItem.name}
            className={cn(
              "text-center text-secondary/80 hover:text-accent-foreground font-thin px-2 text-sm ",
              navItem.current && "scale-110 accent-foreground text-accent-foreground font-normal"
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
