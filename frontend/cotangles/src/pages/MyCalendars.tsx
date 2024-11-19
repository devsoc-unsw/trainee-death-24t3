import "../App.css";
import { CardTop, CardBody, CardHeader } from "@/components/ui/card";
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
        <CardBody>
          <p>This card body background will be made transparent & filled up with calendar cards.</p>
        </CardBody>
    </>
  );
}

export default MyCalendars;
