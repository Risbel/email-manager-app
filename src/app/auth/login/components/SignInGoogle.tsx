"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { cn } from "@/lib/shadcn-utils";

const SignInGoogle = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex justify-center">
      <Button
        onClick={(e) => {
          e.preventDefault();
          setIsLoading(true);
          signIn("google", {
            callbackUrl: "/",
          });
          setIsLoading(true);
        }}
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
  );
};

export default SignInGoogle;
