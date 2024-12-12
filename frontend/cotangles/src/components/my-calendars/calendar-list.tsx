import * as React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";


// Components specifically related to the my calendar page


const CardBodyCalendar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap justify-start rounded-[2.5em] bg-transparent text-black w-[70vw] h-[85%] p-5 gap-x-[5%] gap-y-[10%] overflow-auto",
          className
        )}
        {...props}
      />
    )
  );
  CardBodyCalendar.displayName = "CardBodyCalendar";

// export type CalendarProps = {
//   calendars: { calendarName: string; calendarId: string }[]; // Array of users?
// };

  const MyCalendarList = () => {
    const navigate = useNavigate()
    // Todo set this to use state instead
    const calendars = [
      {
        calendarName: "AAAA",
        calendarId: "1"
      },
      {
        calendarName: "CS Alliance",
        calendarId: "yourmother"
      },
      {
        calendarName: "COMM1140 Team",
        calendarId: "asdasd"
      },
    ]
    return (
      <>
      {calendars.map((calendar) => (
        <Button  className="flex flex-col items-center justify-evenly rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-[30%] h-[70%] p-5 text-center" onClick={() => {navigate(`./${calendar.calendarId}`)}}>
            <h1 className="break-words w-full">{calendar.calendarName}</h1>
            {/* Needs to redirect to a link */}
            {/* Could add something here like a calendar / person preview , also calendar settings (leave calendar and whatnot) */}
        </Button>
      ))}
      </>
    );
};


export {
    MyCalendarList,
    CardBodyCalendar
}