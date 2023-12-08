import { ChevronLeft } from "lucide-react";
import React from "react";

const ServiceLayout = ({ name, matcher, service, setService, children }: any) => {
  if (service == matcher) {
    return (
      <div>
        <div className="relative flex items-center justify-center bg-gray-300 py-4 md:py-8">
          <button
            onClick={() => setService(0)}
            className="absolute -top-6 left-0 md:left-4 flex bg-gradient-to-t from-gray-700 via-black/80 to-gray-400 rounded-md px-1 py-1 m-2 shadow-gray-700 shadow-md"
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
