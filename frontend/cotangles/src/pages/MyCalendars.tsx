import "../App.css";
import { CardTop, CardHeader } from "@/components/ui/card";
import { MyCalendarList, CardBodyCalendar } from "@/components/my-calendars/calendar-list"
import { CardCalendarInvite } from "@/components/my-calendars/calendar-invite";
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
          <CardCalendarInvite/>
          {/* 
          Todo make sure calendarnames are less than 20 characters
          Probs get function to validate this in the frontend
          */}
        <MyCalendarList/>
        </CardBodyCalendar>
    </>
  );
}

export default MyCalendars;
