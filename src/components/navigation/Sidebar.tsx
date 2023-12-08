import { cn } from "@/lib/shadcn-utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { INavigation } from "./Navbar";

const Sidebar = ({ items }: { items: INavigation[] }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="md:hidden">
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
          className={cn(" fixed top-16 z-40 bg-slate-800 rounded-3xl h-1/2 w-2/4 shadow-2xl", !isActive && "hidden")}
        >
          <div className="relative flex justify-center border-b-[0.2px] py-2">
            <button className="absolute left-3 top-3" onClick={() => setIsActive((prev) => !prev)}>
              ✖️
            </button>
            <h2 className="text-white text-center text-xl">Navigation</h2>
          </div>

          <div className="flex flex-col gap-4 p-6 items-start">
            {items.map((item) => (
              <Link
                key={item.name}
                className={cn("text-center text-gray-300 font-thin", item.current && "text-white font-semibold")}
                href={item.href}
              >
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </>
    </section>
  );
};

export default Sidebar;
