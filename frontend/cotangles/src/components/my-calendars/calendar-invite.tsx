
// Todo, link this to back end , below component will have the invites prop

import { Check, X } from "lucide-react";
import { Button } from "../ui/button";
import { CalendarCreateForm } from "./calendar-create-form";
import * as React from "react";
import { CalendarSetter } from "./calendar-list";
import { CalendarList } from "@/types";
import acceptInviteFetcher from "../../hooks/acceptInvite";
import getInvitesList from "@/hooks/getInvitesList";
import rejectInvite from "@/hooks/rejectInvite";

const CalendarInvites = () => {
  const [calendarInvites, setCalendarInvites] = React.useState<CalendarList[]>([]);

  getInvitesList().response.then((data) => {
    if (data) {
      const calendarNames: CalendarList[] = data.calendarNames;
      setCalendarInvites(calendarNames);
    }
  });

  const acceptInvite = async (calendarToAccept: CalendarList) => {
    try {
      await acceptInviteFetcher(calendarToAccept.calendarId);
    } catch (error) {
      console.error("Error accepting invite:", error);
    }
  };

  const removeInvite = async (calendarToRemove: CalendarList) => {
    // setCalendarInvites(calendarInvites.filter(calendar => calendar !== calendarToRemove))
    try {
      await rejectInvite(calendarToRemove.calendarId);
    } catch (error) {
      console.error("Error accepting invite:", error);
    }
  }

  if (calendarInvites.length == 0) {
    return <span>No pending invites 😔</span>
  }

  return(
    <>
      {calendarInvites.map((calendar) => (
        <div key={calendar.calendarId} className="flex content-center items-center w-[95%] p-0 pb-1">
          <span className="min-w-[50%] min-h-8 flex flex-grow h-full text-[0.7em] bg-primary text-center justify-center items-center border-2 rounded-lg px-1"><b>{calendar.calendarName}</b></span>
          <Button className="scale-75 flex-grow-0 w-[20%] rounded-xl bg-affirmative h-full" onClick={() => {acceptInvite(calendar)}}><Check/></Button>
          <Button className="scale-75 flex-grow-0 w-[20%] rounded-xl bg-destructive h-full" onClick={() => {removeInvite(calendar)}}><X/></Button>
        </div>
      ))}
    </>
  )
}
export const CardCalendarInvite = ({ addCalendar }: { addCalendar: CalendarSetter }) => {
  return (
    <div className="flex flex-col content-center items-center justify-between rounded-[2.5em] bg-transparent text-black w-[30%] h-[70%]">
      <CalendarCreateForm addCalendar={addCalendar}/>
        <div className="flex flex-col items-center justify-start rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-full h-[70%]">
          <h2 className="w-full text-md py-2 break-words">Pending</h2>
          <div className="overflow-y-auto h-[90%] w-[80%]">
            <CalendarInvites/>
          </div>
        </div>
    </div>
  );
  };