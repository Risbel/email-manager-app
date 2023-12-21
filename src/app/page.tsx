import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="relative">
      <Image
        className="w-full hidden md:block"
        src={"/home-image-robotic-hand.jpg"}
        height={768}
        width={1024}
        alt="home image robotic hand"
      />

      <Image
        className="w-full md:hidden"
        src={"/home-image-robotic-hand-movile.jpg"}
        height={667}
        width={375}
        alt="home image robotic hand movile"
      />
      <div className="flex flex-col gap-4 md:gap-5 absolute w-full -translate-y-10 top-0 bottom-0 justify-center items-center">
        <div className="flex flex-col md:flex-row gap-2 lg:gap-4 w-full top-0 bottom-0 justify-center items-center">
          <Image
            className="z-20 h-14 w-14 lg:h-16 lg:w-16"
            src={"/person-headset.svg"}
            height={60}
            width={60}
            alt="person headset icon"
          />
          <h1 className="flex flex-col md:flex-row md:gap-4 text-white drop-shadow-lg z-20 text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            <span>VIRTUAL</span>
            <span>SECRETARY</span>
          </h1>
        </div>
        <Button size={"lg"} variant={"secondary"} className="font-bold w-32">
          <Link href={"/services"}>START</Link>
        </Button>
      </div>
    </main>
  );
};

export default Home;
