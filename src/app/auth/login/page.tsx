"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/shadcn-utils";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import LoginForm from "./components/LoginForm";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden bg-current">
      <Image
        className="blur-sm w-screen hidden md:block"
        src={"/home-image-robotic-hand.jpg"}
        height={768}
        width={1024}
        alt="home image robotic hand"
      />

      <Image
        className="blur-sm w-screen md:hidden"
        src={"/home-image-robotic-hand-movile.jpg"}
        height={667}
        width={375}
        alt="home image robotic hand movile"
      />
      <div className="grid md:grid-cols-2 gap-4 justify-center md:justify-around absolute rounded-xl md:rounded-3xl shadow-md shadow-primary/60 px-4 py-12 w-full md:w-5/6 lg:w-8/12 bg-primary-foreground">
        <div className="lg:px-12">
          <div className="pb-8">
            <h1 className="text-center md:text-start font-semibold text-4xl text-primary">Login</h1>
            <p className="text-center md:text-start font-light text-lg">Login to access to Virtual Secretary</p>
          </div>

          <LoginForm />

          <div className="flex my-4">
            <div className="border-b border-primary w-full" />
            <p className="px-2">or</p>
            <div className="border-b border-primary w-full" />
          </div>

          <div className="flex justify-center">
            <Button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "https://secretary-app.vercel.app",
                })
              }
              className="flex items-center gap-2 w-full"
            >
              <Image width={18} height={18} src="/icon_google.svg" alt="icon google" />
              Sign in with Google
              <Image
                className={cn("animate-spin", !isLoading && "hidden")}
                width={15}
                height={15}
                src="/spinner-secondary.svg"
                alt="spinner"
              />
            </Button>
          </div>
        </div>
        <div>
          <Image
            className="hidden md:block"
            src={"/secretary-on-desktop.jpg"}
            height={350}
            width={450}
            alt="secretart on desktop picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
