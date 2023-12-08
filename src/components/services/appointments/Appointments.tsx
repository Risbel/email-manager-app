import { Button } from "@/components/ui/button";
import getAppointments, { IAppointments } from "@/services/getAppointments";
import { useEffect, useState } from "react";
import SkeletonAppointment from "./SkeletonAppointment";

const Appointments = () => {
  const [appointments, setAppointments] = useState<IAppointments[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <SkeletonAppointment />
        </div>
      ) : (
        <div className="overflow-hidden overflow-x-scroll w-full bg-gray-300 px-4 md:px-8">
          <div className="flex flex-col gap-6 md:gap-8 pb-20">
            {appointments &&
              appointments.map((appointment) => {
                return (
                  <div key={appointment.id}>
                    <h2 className="text-gray-700 text-xl md:text-2xl font-bold pb-2 pl-4">{appointment.type}</h2>
                    <div className="flex gap-8 md:gap-12">
                      {appointment.tasks.map((task) => (
                        <div
                          key={task.id}
                          className="p-4 bg-gray-700 rounded-xl min-w-[180px]
                          max-w-[180px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px]"
                        >
                          <p className="txt-xs md:text-base text-gray-300 font-light">{task.name}</p>
                          <h4 className="md:text-lg font-bold text-gray-200 pb-2">{task.shortDescription}</h4>
                          <p className="text-xs text-gray-300">Latitude: {task.coordinates.latitude}</p>
                          <p className="text-xs text-gray-300">Longitude: {task.coordinates.longitude}</p>

                          <Button variant={"secondary"} className="h-8 mt-4">
                            Details
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
