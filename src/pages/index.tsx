import Image from "next/image";
import { Inter } from "next/font/google";
import HomeLayout from "@/components/layouts/HomeLayout";
import CardDetails from "@/components/CardDetails";
import CardCalendar from "@/components/CardCalendar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <HomeLayout>
      <main className={`${inter.className}`}>
        <section id="hero">
          <div className="flex justify-center pt-20 pb-8 bg-gray-200">
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
          <div className="bg-gray-400 py-8">
            <p className="text-center text-xl font-bold text-gray-800">SERVICES</p>
          </div>

          <div className="grid justify-center gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3 px-16 py-8">
            <div className="flex flex-col justify-between bg-gray-700 px-6 md:px-8 py-4 rounded-3xl">
              <div className="flex justify-center">
                <Image src={"/agreement-bussiness-hands-svgrepo-com.svg"} width={180} height={180} alt="" />
              </div>

              <div className="bg-gray-300 rounded-xl py-2">
                <p className="text-center  md:text-xl font-bold text-gray-800">APPOINTMENTS</p>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-gray-700 px-6 md:px-8 py-4 rounded-3xl">
              <div className="flex justify-center p-8">
                <Image
                  src={"/medical-notes-symbol-of-a-list-paper-on-a-clipboard-svgrepo-com.svg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </div>

              <div className="bg-gray-300 rounded-xl py-2">
                <p className="text-center  md:text-xl font-bold text-gray-800">TASKS</p>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-gray-700 px-6 md:px-8 py-4 rounded-3xl">
              <div className="flex justify-center p-8">
                <Image src={"/time-svgrepo-com.svg"} width={100} height={100} alt="" />
              </div>
              <div className="bg-gray-300 rounded-xl py-2">
                <p className="text-center  md:text-xl font-bold text-gray-800">PENDING</p>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-gray-700 px-6 md:px-8 py-4 rounded-3xl">
              <div className="flex justify-center p-8">
                <Image src={"/chat-alert-left-3-svgrepo-com.svg"} width={100} height={100} alt="" />
              </div>
              <div className="bg-gray-300 rounded-xl py-2">
                <p className="text-center  md:text-xl font-bold text-gray-800">PRIORITY</p>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-gray-700 px-6 md:px-8 py-4 rounded-3xl">
              <div className="flex justify-center p-8">
                <Image src={"/list-ol-svgrepo-com.svg"} width={100} height={100} alt="" />
              </div>
              <div className="bg-gray-300 rounded-xl py-2">
                <p className="text-center  md:text-xl font-bold text-gray-800">REGISTER</p>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-gray-700 px-6 md:px-8 py-4 rounded-3xl">
              <div className="flex justify-center p-8">
                <Image src={"/agenda-svgrepo-com.svg"} width={100} height={100} alt="" />
              </div>
              <div className="bg-gray-300 rounded-xl py-2">
                <p className="text-center  md:text-xl font-bold text-gray-800">SMART AGENDA</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </HomeLayout>
  );
}
