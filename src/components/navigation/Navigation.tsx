"use client";

import { cn } from "@/lib/shadcn-utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  const pathname = usePathname();

  const isCurrentPath = (path: any) => path === pathname.split("/")[1];

  const navigation: INavigation[] = [
    {
      name: "Home",
      href: "/",
      current: isCurrentPath(""),
    },
    {
      name: "Services",
      href: "/services",
      current: isCurrentPath("services"),
    },
    {
      name: "Virtual Secretary",
      href: "/virtual_secretary",
      current: isCurrentPath("virtual_secretary"),
    },
    {
      name: "About Us",
      href: "/about_us",
      current: isCurrentPath("about_us"),
    },
  ];
  return (
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
  );
};

export default Navigation;

export interface INavigation {
  name: string;
  href: string;
  current: boolean;
}
