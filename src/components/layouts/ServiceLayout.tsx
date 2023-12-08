import { ChevronLeft } from "lucide-react";
import React from "react";

const ServiceLayout = ({ name, matcher, service, setService, children }: any) => {
  if (service == matcher) {
    return (
      <div>
        <div className="relative flex items-center justify-center bg-gray-300 py-4 md:py-8">
          <button
            onClick={() => setService(0)}
            className="absolute left-0 md:left-4 flex bg-gray-700 rounded-md px-1 py-1 m-2"
          >
            <ChevronLeft className="stroke-gray-200" />
          </button>
          <p className="text-center text-lg md:text-xl font-bold text-gray-700">{name}</p>
        </div>
        <div>{children}</div>
      </div>
    );
  }
};

export default ServiceLayout;
