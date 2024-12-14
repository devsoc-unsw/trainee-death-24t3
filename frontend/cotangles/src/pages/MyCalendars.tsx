import "../App.css";
import { CardTop, CardHeader } from "@/components/ui/card";
import { CardBodyCalendar } from "@/components/my-calendars/calendar-list"
import getCalendarList from "../hooks/getCalendarList"
import { CalendarList } from "@/types";
import { useState } from "react";
// import { CalendarData } from "@/types";

function MyCalendars() {
  const [ calendarList, setCalendarList ] = useState<CalendarList[]>([]);

  getCalendarList().response.then((data) => {
    if (data) {
      const calendarNames: CalendarList[] = data.calendarNames;
      setCalendarList(calendarNames);
    }
  });

  return (
    <>
        {/* Title */}
        <CardTop>
          <CardHeader>
            <h1>My Calendars</h1>
          </CardHeader>
        </CardTop>
        {/* Body */}
        <CardBodyCalendar calendarList={calendarList}/>
    </>
  );
}

export default MyCalendars;
