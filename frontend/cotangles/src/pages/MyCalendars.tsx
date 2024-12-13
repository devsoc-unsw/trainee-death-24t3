import "../App.css";
import { CardTop, CardHeader } from "@/components/ui/card";
import { CardCalendar, CardBodyCalendar } from "@/components/my-calendars/calendar-list"
import { CardCalendarInvite } from "@/components/my-calendars/calendar-invite";
import getCalendarList from "../../hooks/getCalendarList"

// import { useState } from "react";
// import { CalendarList } from "@/types";

function MyCalendars() {

  // const [ calendarList, setCalendarList ] = useState<CalendarList[]>([]);
  getCalendarList().response.then((data) => {
    console.log(data);
    // const calendarInput = data.calendarInfos.calendarUserData[0].calendarData
    // calendarInput.map((event: CalendarData) => {
    //   event.start = new Date(event.start)
    //   event.end = new Date(event.end)
    // })
    // // console.log(data.calendarInfos.calendarUserData[0].calendarData)
    // setCalendarData(data.calendarInfos.calendarUserData[0].calendarData)
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
        <CardBodyCalendar>
          <CardCalendarInvite/>
          {/* 
          Todo make sure calendarnames are less than 20 characters
          Probs get function to validate this in the frontend
          */}
          <CardCalendar calendarName="Calendar Name" calendarId={1}/>
          <CardCalendar calendarName="CS Alliance" calendarId={2}/>
          <CardCalendar calendarName="COMM1140 Team" calendarId={3}/>
          <CardCalendar calendarName="Team 1: Death" calendarId={4}/>
          <CardCalendar calendarName="MATH1081 Study Group" calendarId={5}/>
          <CardCalendar calendarName="wow" calendarId={6}/>
        </CardBodyCalendar>
    </>
  );
}

export default MyCalendars;
