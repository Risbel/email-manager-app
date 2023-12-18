"use client";

import { cn } from "@/lib/shadcn-utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServicesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const params = usePathname();
  const lastParam = params.split("/");

  return (
    <section className="pt-14">
      <Link
        href={"/services"}
        className={cn(
          "fixed top-16 flex bg-muted-foreground/90 rounded-md px-[1px] md:px-1 py-1 m-2 shadow-silverdark shadow-sm hover:-translate-y-[1px]",
          lastParam[lastParam.length - 1] === "services" && "hidden"
        )}
      >
        <ChevronLeft className="stroke-primary-foreground h-5 md:h-6" />
      </Link>
      <div className="bg-muted py-5 md:py-4">
        <p className="text-center text-base md:text-xl font-bold text-muted-foreground">
          {lastParam[lastParam.length - 1].toUpperCase()}
        </p>
      </div>

      {children}
    </section>
  );
}
