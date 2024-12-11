import * as React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CardCalendarProps } from "./calendar-invite";


// Components specifically related to the my calendar page


const CardBodyCalendar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap justify-start rounded-[2.5em] bg-transparent text-black w-[70vw] h-[85%] p-5 gap-[5%] overflow-auto",
          className
        )}
        {...props}
      />
    )
  );
  CardBodyCalendar.displayName = "CardBodyCalendar";

const CardCalendar = ({ calendarName, calendarId }: CardCalendarProps) => {
    const navigate = useNavigate()
    return (
        <Button onClick={() => {navigate(`./${calendarId}`)}} className="flex flex-col items-center justify-evenly rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-[30%] h-[70%] p-5 text-center">
            <h1 className="break-words w-full">{calendarName}</h1>
            {/* Needs to redirect to a link */}
            {/* Could add something here like a calendar / person preview , also calendar settings (leave calendar and whatnot) */}
            <div>

            </div>
        </Button>
    );
};


export {
    CardCalendar,
    CardBodyCalendar
}