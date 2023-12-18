import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AppointmentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="overflow-hidden overflow-x-scroll w-full bg-secondary px-4 md:px-12">{children}</div>
    </section>
  );
}
