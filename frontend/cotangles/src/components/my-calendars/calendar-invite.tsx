
// Todo, link this to back end , below component will have the invites prop

import { Check, X } from "lucide-react";
import { Button } from "../ui/button";
import { CalendarCreateForm } from "./calendar-create-form";

// Todo: add a state that removes pending invites when either accept or deny button is clicked
export const CardCalendarInvite = () => {
    return (
      <div className="flex flex-col content-center items-center justify-between rounded-[2.5em] bg-transparent text-black w-[30%] h-[70%]">
        <CalendarCreateForm/>
          <div className="flex flex-col items-center justify-start rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-full h-[70%]">
            <h2 className="w-full text-md py-2 break-words">Pending</h2>
            <div className="overflow-y-auto h-[90%] w-[80%]">
              <CalendarInvite calendarId={1} calendarName="This is20 characters"/>
              <CalendarInvite calendarId={2} calendarName="omg"/>
              <CalendarInvite calendarId={3} calendarName="aaaa"/>
              <CalendarInvite calendarId={3} calendarName="Gigachad meetups"/>
              <CalendarInvite calendarId={3} calendarName="Gigachad meetups"/>
              <CalendarInvite calendarId={3} calendarName="Gigachad meetups"/>
              <CalendarInvite calendarId={3} calendarName="Gigachad meetups"/>
            </div>
          </div>
      </div>
    );
  };

  
export type CardCalendarProps = { calendarName: string, calendarId: number }

const CalendarInvite = ({ calendarName, calendarId }: CardCalendarProps) => {
    // Adds the calendarId to + name as a card to the my-calendars page when you
    // accept
    // Removes the invite when you deny
    console.log(calendarId)
    return(
        <div className="flex content-center items-center w-[95%] p-0 pb-1">
            <span className="min-w-[50%] min-h-8 flex flex-grow h-full text-[0.7em] bg-primary text-center justify-center items-center border-2 rounded-lg px-1"><b>{calendarName}</b></span>
            <Button className="scale-75 flex-grow-0 w-[20%] rounded-xl bg-affirmative h-full"><Check/></Button>
            <Button className="scale-75 flex-grow-0 w-[20%] rounded-xl bg-destructive h-full"><X/></Button>
        </div>
    )
}