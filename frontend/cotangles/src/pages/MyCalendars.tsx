import "../App.css";
import { CardTop, CardBody, CardHeader } from "@/components/ui/card";
import { ContentWrapper } from "@/components/ui/content-wrapper";

function MyCalendars() {
  return (
    <>
      <ContentWrapper>
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
      </ContentWrapper>
    </>
  );
}

export default MyCalendars;
