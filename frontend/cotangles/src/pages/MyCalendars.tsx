import "../App.css";
import { CardTop, CardHeader, CardCalendar, CardBodyCalendar, CardCalendarInfo } from "@/components/ui/card";
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
          <CardCalendar calendarName="aaaaa"/>
          <CardCalendar calendarName="owo"/>
          <CardCalendar calendarName="omg"/>
          <CardCalendar calendarName="mmm"/>
          <CardCalendar calendarName="aasd"/>
          <CardCalendar calendarName="fhqwgads"/>
        </CardBodyCalendar>
    </>
  );
}

export default MyCalendars;
