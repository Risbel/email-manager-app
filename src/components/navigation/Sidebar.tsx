"use client";
import { cn } from "@/lib/shadcn-utils";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();

  const isCurrentPath = (path: any) => path === pathname;

  const navigation: INavigation[] = [
    {
      name: "Home",
      href: "/",
      current: isCurrentPath("/"),
    },
    {
      name: "Services",
      href: "/services",
      current: isCurrentPath("/services"),
    },
    {
      name: "Virtual Secretary",
      href: "/virtual_secretary",
      current: isCurrentPath("/virtual_secretary"),
    },
    {
      name: "About Us",
      href: "/about_us",
      current: isCurrentPath("/about_us"),
    },
  ];

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      <button onClick={() => setIsActive((prev) => !prev)}>
        <Image
          className={cn(isActive && "rotate-180 transition-transform duration-300")}
          src={"/menu-svgrepo-com.svg"}
          width={28}
          height={28}
          alt="menu icon"
        />
      </button>

      <>
        <div
          className={cn(
            "fixed top-16 z-40 bg-slate-800 rounded-xl h-1/2 w-4/6 shadow-gray-600 shadow-lg",
            !isActive && "hidden"
          )}
        >
          <div className="relative flex justify-center border-b-[0.2px] py-2">
            <button className="absolute left-2 top-3" onClick={() => setIsActive((prev) => !prev)}>
              <X className="h-5 w-5 accent-foreground font-semibold stroke-accent-foreground" />
            </button>
            <h2 className="accent-foreground text-center text-lg text-primary-foreground">Navigation</h2>
          </div>

          <div className="flex flex-col gap-4 p-6 items-start">
            {navigation.map((item) => (
              <Link
                key={item.name}
                className={cn(
                  "text-center text-secondary font-thin",
                  item.current && "accent-foreground font-semibold"
                )}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;

export interface INavigation {
  name: string;
  href: string;
  current: boolean;
}
