"use client";

import DetailsAppointment from "@/app/services/appointments/components/DetailsAppointment";
import SkeletonAppointments from "@/app/services/appointments/components/SkeletonAppointments";
import getAppointments, { IAppointments } from "@/services/getAppointments";
import { useEffect, useState } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState<IAppointments[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <SkeletonAppointments />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-6 md:gap-8 pb-20">
            {appointments &&
              appointments.map((appointment) => {
                return (
                  <div key={appointment.id}>
                    <h2 className="text-primary text-xl md:text-2xl font-bold pb-2 pl-4">{appointment.type}</h2>
                    <div className="flex gap-8 md:gap-12">
                      {appointment.tasks.map((task) => (
                        <div
                          key={task.id}
                          className="p-4 bg-primary rounded-xl min-w-[180px]
                          max-w-[180px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px]"
                        >
                          <p className="txt-xs md:text-base text-secondary font-light">{task.name}</p>
                          <h4 className="md:text-lg font-bold text-secondary pb-2">{task.shortDescription}</h4>
                          <p className="text-xs text-secondary">Latitude: {task.coordinates.latitude}</p>
                          <p className="text-xs text-secondary">Longitude: {task.coordinates.longitude}</p>

                          <DetailsAppointment task={task} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default Appointments;
