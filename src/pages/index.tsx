import Image from "next/image";
import { Inter } from "next/font/google";
import HomeLayout from "@/components/layouts/HomeLayout";
import CardDetails from "@/components/CardDetails";
import CardCalendar from "@/components/CardCalendar";
import Services from "@/components/services/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <HomeLayout>
      <main className={`${inter.className}`}>
        <section id="hero">
          <div className="flex justify-center py-8 bg-gray-200">
            <div className="flex gap-2 md:gap-4 items-center">
              <Image
                src={"/mail-svgrepo-com (1).svg"}
                width={35}
                height={35}
                alt="email icon"
                className="h-6 w-6 md:h-8 md:w-8"
              />

              <h2 className="text-gray-700 text-lg md:text-2xl font-bold">EMAIL MANAGEMENT</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-8 px-4 md:px-12 lg:px-32 my-20 md:my-16">
            <div className="flex justify-center">
              <CardDetails />
            </div>
            <div className="flex justify-center">
              <CardCalendar />
            </div>
          </div>
        </section>
        <section id="services">
          <Services />
        </section>
      </main>
    </HomeLayout>
  );
}
