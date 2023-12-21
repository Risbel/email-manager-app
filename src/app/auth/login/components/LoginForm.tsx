"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import useLogin from "@/hooks/useLogin";
import Image from "next/image";
import { cn } from "@/lib/shadcn-utils";

const loginSchema = z.object({
  email: z.string().min(1, { message: "The email is required" }).email(),
  password: z.string().min(1, { message: "The password is required" }),
});

export type ILoginSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [isPassword, setIsPassword] = useState(false);

  const { mutate, data, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<ILoginSchema> = (data) => {
    mutate(data);
  };

  console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="relative">
        <Label name={"Email"} htmlfor={"email"} />
        <Input {...register("email")} autoComplete="none" id="email" />
        {errors.email && <p className="text-start text-xs italic text-red-500">{errors.email.message}</p>}
      </div>
      <div className="relative">
        <Label name={"Password"} htmlfor={"password"} className="z-30" />
        <div className="relative z-20">
          <Input {...register("password")} id="password" autoComplete="none" type={isPassword ? "text" : "password"} />
          <div className="absolute right-2 top-2 cursor-pointer" onClick={() => setIsPassword((prev) => !prev)}>
            {isPassword ? <EyeIcon className="stroke-primary" /> : <EyeOffIcon className="stroke-primary" />}
          </div>
        </div>

        {errors.password && <p className="text-start text-xs italic text-red-500">{errors.password.message}</p>}
      </div>
      <Button className="flex items-center gap-2" type="submit">
        Login
        <Image
          className={cn("animate-spin", !isPending && "hidden")}
          width={15}
          height={15}
          src="/spinner-secondary.svg"
          alt="spinner"
        />
      </Button>
    </form>
  );
};

export default LoginForm;
