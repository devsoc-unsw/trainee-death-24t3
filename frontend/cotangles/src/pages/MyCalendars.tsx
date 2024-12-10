import "../App.css";
import { CardTop, CardHeader } from "@/components/ui/card";
import { CardCalendar, CardBodyCalendar, CardCalendarInfo } from "@/components/ui/calendar-list"
function MyCalendars() {
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
          <CardCalendarInfo/>
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
