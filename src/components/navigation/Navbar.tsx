import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex fixed z-50 w-full justify-between items-center px-2 md:px-8 py-3 bg-gray-700 shadow-gray-400 shadow-md">
      <div className="flex gap-4 md:gap-8 items-center">
        <button>
          <Image src={"/menu-svgrepo-com.svg"} width={28} height={28} alt="menu icon" />
        </button>

        <Link href={"/"} className="flex -translate-y-1">
          <Image src={"/logo-em.png"} width={70} height={35} alt="logo-em" priority />
        </Link>
      </div>
      <div className="hidden md:flex gap-2">
        <Link className="text-gray-200 font-thin" href={"/"}>
          Services
        </Link>
        <Link className="text-gray-200 font-thin" href={"/"}>
          About Us
        </Link>
        <Link className="text-gray-200 font-thin" href={"/"}>
          Virtual Secretary
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <Link href={"/"}>
          <Image src={"/search-svgrepo-com.svg"} width={28} height={28} alt="logo-em" priority />
        </Link>
        <Link href={"/"}>
          <Image src={"/profile-circle-svgrepo-com.svg"} width={28} height={28} alt="logo-em" priority />
        </Link>
        <Link href={"/"}>
          <Image src={"/dots-3-vertical-svgrepo-com.svg"} width={20} height={20} alt="logo-em" priority />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
