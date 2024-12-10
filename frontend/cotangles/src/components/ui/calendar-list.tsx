import * as React from "react";
import { Button } from "./button";
import { Check, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";


// Components specifically related to the my calendar page


const CardBodyCalendar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap align-center justify-start rounded-[2.5em] bg-transparent text-black w-[70vw] h-[85%] p-5 gap-[5%] overflow-auto",
          className
        )}
        {...props}
      />
    )
  );
  CardBodyCalendar.displayName = "CardBodyCalendar";

// Todo, link this to back end , below component will have the invites prop
// Todo: add a state that removes pending invites when either accept or deny button is clicked
const CardCalendarInfo = () => {
    return (
      <div className="flex flex-col content-center items-center justify-between rounded-[2.5em] bg-transparent text-black w-[30%] h-[70%]">
        {/* Todo: clicking this button creates a pop up to create a calendar */}
          <Button className="w-[100%] rounded-[2.5em] bg-secondary h-[20%]"><Plus/></Button>
          <div className="flex flex-col align-center items-center justify-start rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-[100%] h-[70%] overflow-y-auto">
            <h1 className="break-words w-[100%] text-md py-2">Pending</h1>
            <CalendarInvite calendarId={1} calendarName="This is20 characters"/>
            <CalendarInvite calendarId={2} calendarName="omg"/>
            <CalendarInvite calendarId={3} calendarName="Gigachad meetups"/>
            <CalendarInvite calendarId={3} calendarName="Gigachad meetups"/>
            <CalendarInvite calendarId={3} calendarName="Gigachad meetups"/>
            <CalendarInvite calendarId={3} calendarName="Gigachad meetups"/>
            <CalendarInvite calendarId={3} calendarName="Gigachad meetups"/>
          </div>
      </div>
    );
  };

  
type CardCalendarProps = { calendarName: string, calendarId: number }

const CalendarInvite = ({ calendarName, calendarId }: CardCalendarProps) => {
    // Adds the calendarId to + name as a card to the my-calendars page when you
    // accept
    // Removes the invite when you deny
    console.log(calendarId)
    return(
        <div className="flex justify-center content-center items-center w-[90%] p-0 pb-1">
            <span className="flex flex-grow h-[80%] min-w-[60%] text-[0.7em] bg-primary text-center justify-center items-center border-2 rounded-lg px-1"><b>{calendarName}</b></span>
            <Button className="scale-75 w-[20%] rounded-xl bg-affirmative h-full"><Check/></Button>
            <Button className="scale-75 w-[20%] rounded-xl bg-destructive h-full"><X/></Button>
        </div>
    )
}

const CardCalendar = ({ calendarName, calendarId }: CardCalendarProps) => {
    const navigate = useNavigate()
    return (
        <Button onClick={() => {navigate(`./${calendarId}`)}} className="flex flex-col align-center items-center justify-evenly rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-[30%] h-[70%] p-5 text-center">
            <h1 className="break-words w-[100%]">{calendarName}</h1>
            {/* Needs to redirect to a link */}
            {/* Could add something here like a calendar / person preview , also calendar settings (leave calendar and whatnot) */}
            <div>

            </div>
        </Button>
    );
};


export {
    CardCalendar,
    CardBodyCalendar,
    CardCalendarInfo
}