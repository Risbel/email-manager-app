"use client";

import { useState } from "react";
import { Calendar } from "./ui/calendar";
import RecentNotifications from "./RecentNotifications";

const CardCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-8 items-center">
      <Calendar mode="single" selected={date} onSelect={setDate} classNames={{ day: "rounded-full h-9 w-9" }} />

      <RecentNotifications />
    </div>
  );
};

export default CardCalendar;
