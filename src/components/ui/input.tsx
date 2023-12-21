import * as React from "react";

import { cn } from "@/lib/shadcn-utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Label = ({ name, htmlfor, className }: { name: string; htmlfor: string; className?: string }) => {
  return (
    <label
      className={cn(
        "absolute -top-[14px] md:-top-[16px] left-3 bg-accent-foreground rounded-md text-primary px-1 text-sm md:text-base",
        className
      )}
      htmlFor={htmlfor}
    >
      {name}
    </label>
  );
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-primary bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input, Label };
