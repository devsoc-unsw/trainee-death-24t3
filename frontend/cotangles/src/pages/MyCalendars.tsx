import "../App.css";
import { CardTop, CardHeader } from "@/components/ui/card";
import { CardBodyCalendar } from "@/components/my-calendars/calendar-list"
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
        <CardBodyCalendar/>
    </>
  );
}

export default MyCalendars;
