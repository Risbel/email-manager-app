import CardCalendar from "@/components/hero/CardCalendar";
import CardDetails from "@/components/hero/CardDetails";

import Image from "next/image";

const Home = () => {
  return (
    <main className="pt-12">
      <div className="flex justify-center py-8 bg-secondary">
        <div className="flex gap-2 md:gap-4 items-center">
          <Image
            src={"/mail-svgrepo-com (1).svg"}
            width={35}
            height={35}
            alt="email icon"
            className="h-6 w-6 md:h-8 md:w-8"
          />

          <h2 className="text-primary text-lg md:text-2xl font-bold">EMAIL MANAGEMENT</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-8 px-4 md:px-12 lg:px-28 my-12 md:my-15">
        <div className="flex justify-center">
          <CardDetails />
        </div>
        <div className="flex justify-center">
          <CardCalendar />
        </div>
      </div>
    </main>
  );
};

export default Home;
