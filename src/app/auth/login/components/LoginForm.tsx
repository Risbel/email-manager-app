import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const loginSchema = z.object({
  email: z.string().min(1, { message: "The email is required" }).email(),
  password: z.string().min(1, { message: "The password is required" }),
});

export type ILoginSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [isPassword, setIsPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<ILoginSchema> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="relative">
        <Label name={"Email"} htmlfor={"email"} />
        <Input {...register("email")} autoComplete="none" />
        {errors.email && <p className="text-xs italic text-red-500">{errors.email.message}</p>}
      </div>
      <div className="relative">
        <Label name={"Password"} htmlfor={"password"} className="z-30" />
        <div className="relative z-20">
          <Input {...register("password")} autoComplete="none" type={isPassword ? "text" : "password"} />
          <div className="absolute right-2 top-2 cursor-pointer" onClick={() => setIsPassword((prev) => !prev)}>
            {isPassword ? <EyeIcon className="stroke-primary" /> : <EyeOffIcon className="stroke-primary" />}
          </div>
        </div>

        {errors.password && <p className="text-xs italic text-red-500">{errors.password.message}</p>}
      </div>
      <Button type="submit">SAVE</Button>
    </form>
  );
};

export default LoginForm;
