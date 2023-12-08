import { cn } from "@/lib/shadcn-utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { INavigation } from "./Navbar";

const Sidebar = ({ items }: { items: INavigation[] }) => {
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
            <button className="absolute left-2 top-2" onClick={() => setIsActive((prev) => !prev)}>
              ✖️
            </button>
            <h2 className="text-white text-center text-lg">Navigation</h2>
          </div>

          <div className="flex flex-col gap-4 p-6 items-start">
            {items.map((item) => (
              <Link
                key={item.name}
                className={cn("text-center text-gray-300 font-thin", item.current && "text-white font-semibold")}
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
