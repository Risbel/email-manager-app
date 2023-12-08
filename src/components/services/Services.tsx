import React from "react";
import CardServices from "./CardServices";
import useGetServices from "@/hooks/useGetServices";

const Services = () => {
  const { data: items } = useGetServices();

  return (
    <div className="grid justify-center gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-16 py-8">
      {items.map((item) => (
        <CardServices key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Services;
