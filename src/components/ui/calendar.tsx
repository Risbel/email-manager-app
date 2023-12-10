import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/shadcn-utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-start relative items-center",
        caption_label: "text-md font-semibold bg-secondary py-2 px-6 rounded-2xl",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute right-12 md:right-16",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex gap-1 md:gap-4 lg:gap-6",
        head_cell: "text-gray-700 rounded-md w-9 text-md font-bold",
        row: "flex w-full mt-2 gap-1 md:gap-4 lg:gap-6",
        cell: "h-9 w-9 text-center text-sm md:text-md font-semibold p-0 relative hover:bg-gray-300 transition-colors duration-300 rounded-full [&:has([aria-selected].day-range-end)]:rounded-full first:[&:has([aria-selected])]:rounded-full last:[&:has([aria-selected])]:rounded-full focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 px-4 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary hover:bg-primary text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-secondary text-secondary-foreground",
        day_outside:
          "day-outside text-thin text-xs opacity-80 aria-selected:bg-secondary/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-light opacity-50",
        day_range_middle: "aria-selected:bg-secondary aria-selected:text-secondary-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-8 w-8" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-8 w-8" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
