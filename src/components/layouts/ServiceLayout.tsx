import { ChevronLeft } from "lucide-react";
import React from "react";

const ServiceLayout = ({ name, matcher, service, setService, children }: any) => {
  if (service == matcher) {
    return (
      <div>
        <div className="relative flex items-center justify-center bg-secondary py-4 md:py-6">
          <button
            onClick={() => setService(0)}
            className="absolute -top-6 left-0 md:left-4 flex bg-gradient-to-t from-primary via-accent/80 to-muted rounded-md px-1 py-1 m-2 shadow-primary shadow-md hover:-translate-y-[1px]"
          >
            <ChevronLeft className="stroke-primary-foreground" />
          </button>
          <p className="text-center text-lg md:text-xl font-bold text-primary">{name}</p>
        </div>
        <div>{children}</div>
      </div>
    );
  }
};

export default ServiceLayout;
