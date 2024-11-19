import "../App.css";
import { CardTop, CardBody, CardHeader } from "@/components/ui/card";
import { ContentWrapper } from "@/components/ui/content-wrapper";
// import { useParams } from "react-router-dom";
function Calendar() {
  // let { calendarId } = useParams();
  // return <h1>Calendar ID {calendarId}</h1>;
  return (
    <>
      <ContentWrapper>
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
      </ContentWrapper>
    </>
  );
}

export default Calendar;
