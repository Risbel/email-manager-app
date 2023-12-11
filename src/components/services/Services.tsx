import React, { useState } from "react";
import CardServices from "./CardServices";
import { cn } from "@/lib/shadcn-utils";
import ServiceLayout from "../layouts/ServiceLayout";
import Appointments from "./appointments/Appointments";
import useGetServices from "@/hooks/useGetServices";
import Tasks from "./tasks/Tasks";

const Services = () => {
  const { data: items } = useGetServices();

  const [service, setService] = useState(0);

  return (
    <div>
      <div className={cn(service != 0 && "hidden")}>
        <div className="bg-muted py-8">
          <p className="text-center md:text-xl font-bold text-muted-foreground">SERVICES</p>
        </div>
        <div
          className={cn("grid justify-center gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-16 lg:px-36 py-8")}
        >
          {items.map((item) => (
            <CardServices setService={setService} key={item.id} item={item} />
          ))}
        </div>
      </div>

      <ServiceLayout name={"APPOITMENTS"} setService={setService} service={service} matcher={1}>
        <Appointments />
      </ServiceLayout>

      <ServiceLayout name={"TASKS"} setService={setService} service={service} matcher={2}>
        <Tasks />
      </ServiceLayout>
      <ServiceLayout setService={setService} service={service} matcher={3}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, animi temporibus cupiditate repellat tempora
          harum sint minus ratione sunt impedit, eveniet illo? Repellat repellendus illum, necessitatibus vel soluta
          possimus voluptates?
        </p>
      </ServiceLayout>
      <ServiceLayout setService={setService} service={service} matcher={4}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, animi temporibus cupiditate repellat tempora
          harum sint minus ratione sunt impedit, eveniet illo? Repellat repellendus illum, necessitatibus vel soluta
          possimus voluptates?
        </p>
      </ServiceLayout>
      <ServiceLayout setService={setService} service={service} matcher={5}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, animi temporibus cupiditate repellat tempora
          harum sint minus ratione sunt impedit, eveniet illo? Repellat repellendus illum, necessitatibus vel soluta
          possimus voluptates?
        </p>
      </ServiceLayout>
      <ServiceLayout setService={setService} service={service} matcher={6}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, animi temporibus cupiditate repellat tempora
          harum sint minus ratione sunt impedit, eveniet illo? Repellat repellendus illum, necessitatibus vel soluta
          possimus voluptates?
        </p>
      </ServiceLayout>
    </div>
  );
};

export default Services;
