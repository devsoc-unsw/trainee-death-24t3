import MyCalendar from "@/components/ui/calender";
import "../App.css";
import { CardTop, CardBody, CardHeader, CardSidebar } from "@/components/ui/card";

// import { useParams } from "react-router-dom";
function Calendar() {
  // let { CalendarId } = useParams();
  // return <h1>Calendar ID {CalendarId}</h1>;
  return (
    <>
      <div className="flex h-screen">
      {/* Title */}
      <CardSidebar users={[{ userId: 1, userName: "Alice" }, { userId: 2, userName: "Bob" }]}></CardSidebar>

        <div>
          <CardTop>
            <CardHeader>
              <h1>Calendars</h1>
            </CardHeader>
          </CardTop>
          {/* Body */}
          <CardBody>
            <MyCalendar/>
          </CardBody>
        </div>
      </div>
    </>
  );
}

export default Calendar;
