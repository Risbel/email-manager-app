import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const CardRegister = () => {
  return (
    <Dialog>
      <DialogTrigger className="translate-y-[2px]">
        <Image src={"/profile-circle-svgrepo-com.svg"} width={28} height={28} alt="logo-em" priority />
      </DialogTrigger>
      <DialogContent className="h-5/6 w-screen md:w-10/12 p-14 overflow-hidden overflow-y-auto">
        <div className="flex flex-col-reverse lg:grid grid-cols-2">
          <div>
            <div className="flex gap-2 items-center">
              <Image
                src={"/mail-svgrepo-com (1).svg"}
                width={35}
                height={35}
                alt="email icon"
                className="h-6 w-6 lg:h-8 lg:w-8"
              />

              <h2 className="text-gray-700 lg:text-2xl font-bold">EMAIL MANAGEMENT</h2>
            </div>
            <p className="lg:pl-10 pt-2 lg:text-lg text-gray-600">Fill the correspondent field</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Hola");
              }}
              className="flex flex-col gap-4 lg:gap-6 py-6 lg:py-8 lg:pl-10 lg:pr-10"
              action=""
            >
              <div className="flex flex-col relative">
                <label className="absolute -top-4 left-3 bg-white px-1" htmlFor="email">
                  Email
                </label>
                <input
                  autoComplete="email"
                  placeholder="email"
                  type="email"
                  className="h-10 lg:h-12 border border-gray-600 rounded-sm px-3"
                />
              </div>
              <div className="flex flex-col relative">
                <label className="absolute -top-4 left-3 bg-white px-1" htmlFor="emailServer">
                  Email Server
                </label>
                <input
                  autoComplete="current-password"
                  placeholder="email server"
                  type="password"
                  className="h-10 lg:h-12 border border-gray-600 rounded-sm px-3"
                />
              </div>
              <div className="flex flex-col relative">
                <label className="absolute -top-4 left-3 bg-white px-1" htmlFor="port">
                  Port
                </label>
                <input
                  autoComplete="current-password"
                  placeholder="port"
                  type="password"
                  className="h-10 lg:h-12 border border-gray-600 rounded-sm px-3"
                />
              </div>

              <div className="flex flex-col relative">
                <label className="absolute -top-4 left-3 bg-white px-1" htmlFor="password">
                  Password
                </label>
                <input
                  autoComplete="current-password"
                  placeholder="password"
                  type="password"
                  className="h-10 lg:h-12 border border-gray-600 rounded-sm px-3"
                />
              </div>

              <button type="submit" className="text-white py-2 lg:py-4 rounded-lg bg-gray-700">
                REGISTER
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 pb-6">
            <Avatar className="h-44 w-3h-44 md:h-64 md:w-64 rounded-full overflow-hidden">
              <AvatarImage
                src={"/profile-picture.png"}
                alt="profile picture"
                className="h-44 w-3h-44 md:h-64 md:w-64"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="md:text-3xl text-gray-700 font-semibold">Kevin Ramírez</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CardRegister;
