import Image from "next/image";
import Link from "next/link";

import React from "react";
import Sidebar from "./Sidebar";
import DropdownUserSettings from "./DropdownUserSettings";
import Navigation from "./Navigation";
import { getServerSession } from "next-auth";

const Navbar = async () => {
  const session: any = await getServerSession();

  return (
    session && (
      <div className="flex fixed z-50 w-full justify-between items-center px-2 md:px-8 py-3 bg-primary shadow-silverdark shadow-md">
        <div className="flex gap-4 md:gap-8 items-center">
          <Sidebar />

          <Link href={"/"} className="flex">
            <Image src={"/white-horizontal-logo.svg"} width={70} height={35} alt="logo-em" priority />
          </Link>
        </div>

        <Navigation />

        <div className="flex gap-2 items-center">
          <Image
            src={"/bell.svg"}
            width={28}
            height={28}
            alt="logo-em"
            priority
            className="hover:scale-105 cursor-pointer"
          />
          <button className="hover:scale-105">
            <Image src={"/search-svgrepo-com.svg"} width={28} height={28} alt="logo-em" priority />
          </button>

          <DropdownUserSettings />
          {/* <CardRegister /> */}
        </div>
      </div>
    )
  );
};

export default Navbar;
