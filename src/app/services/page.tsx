import { cn } from "@/lib/shadcn-utils";
import CardService from "./components/CardService";

const Services = () => {
  const services: IServices[] = [
    {
      id: "1",
      urlImage: "/agreement-deal-friends.svg",
      name: "appointments",
      width: 150,
      height: 150,
      link: "/services/appointments",
    },
    {
      id: "2",
      urlImage: "/clipboard-list.svg",
      name: "tasks",
      width: 100,
      height: 100,
      link: "/services/tasks",
    },
    {
      id: "3",
      urlImage: "/clock.svg",
      name: "pending",
      width: 120,
      height: 120,
      link: "/services/#",
    },
    {
      id: "4",
      urlImage: "/alert-right.svg",
      name: "priority",
      width: 110,
      height: 110,
      link: "/services/#",
    },
    {
      id: "5",
      urlImage: "/register.svg",
      name: "register",
      width: 115,
      height: 115,
      link: "/services/#",
    },
    {
      id: "6",
      urlImage: "/smart-agenda.svg",
      name: "smart agenda",
      width: 100,
      height: 100,
      link: "/services/#",
    },
  ];

  return (
    <>
      <div
        className={cn(
          "grid justify-center gap-2 md:gap-8 grid-cols-2 lg:grid-cols-3 px-2 md:px-16 lg:px-36 py-4 md:py-8"
        )}
      >
        {services.map((item) => (
          <CardService key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Services;

interface IServices {
  id: string;
  urlImage: string;
  name: string;
  width: number;
  height: number;
  link: string;
}
