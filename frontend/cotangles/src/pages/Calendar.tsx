import "../App.css";
import { CardTop, CardBody, CardHeader } from "@/components/ui/card";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { NavigationCotangles } from "@/components/ui/navigation-menu";
// import { useParams } from "react-router-dom";
function Calendar() {
  // let { calendarId } = useParams();
  // return <h1>Calendar ID {calendarId}</h1>;
  return (
    <>
      <NavigationCotangles />
      <ContentWrapper>
        {/* Title */}
        <CardTop>
          <CardHeader>
            <h1>My Calendars</h1>
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
