"use client";

import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen px-4">
      <div className="rounded-md shadow-md shadow-primary/60 p-4 w-full md:w-1/2 lg:w-1/4">
        <div className="pb-8">
          <h1 className="text-center pt-4 font-semibold text-2xl text-primary">Login</h1>
          <p className="text-center font-light text-lg">Login to access to Virtual Secretary</p>
        </div>

        <form className="flex flex-col gap-6">
          <div className="relative">
            <Label name={"Email"} htmlfor={"email"} />
            <Input autoComplete="none" type="email" />
          </div>
          <div className="relative">
            <Label name={"Password"} htmlfor={"password"} />
            <Input autoComplete="none" type="password" />
          </div>
        </form>
        <div className="flex my-4">
          <div className="border-b border-primary w-full" />
          <p className="px-2">or</p>
          <div className="border-b border-primary w-full" />
        </div>

        <div className="flex justify-center">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setIsLoading(true);
              signIn("google", {
                callbackUrl: "https://secretary-app.vercel.app",
              });
              setIsLoading(true);
            }}
            className="flex items-center gap-2 w-full"
          >
            <Image width={18} height={18} src="/icon_google.svg" alt="icon google" />
            Sign in with Google
            {isLoading && (
              <Image className="animate-spin" width={15} height={15} src="/spinner-secondary.svg" alt="spinner" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
