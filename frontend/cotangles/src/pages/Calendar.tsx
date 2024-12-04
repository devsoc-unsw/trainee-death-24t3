import "../App.css";
import { CardTop, CardBody, CardHeader } from "@/components/ui/card";
// import { useParams } from "react-router-dom";
function Calendar() {
  // let { calendarId } = useParams();
  // return <h1>Calendar ID {calendarId}</h1>;
  return (
    <>
        {/* Title */}
        <CardTop>
          <CardHeader>
            <h1>Calendars</h1>
          </CardHeader>
        </CardTop>
        {/* Body */}
        <CardBody>
          <p>Pretend there's a calendar here</p>
        </CardBody>
    </>
  );
}

export default Calendar;
