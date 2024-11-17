import "../App.css";
import { CardTop, CardBody, CardHeader } from "@/components/ui/card";
import { ContentWrapper } from "@/components/ui/content-wrapper";

function Help() {
  return (
    <>
      <ContentWrapper>
        {/* Title */}
        <CardTop>
          <CardHeader>
            <h1>Help</h1>
          </CardHeader>
        </CardTop>
        {/* Body */}
        <CardBody>
          <h1>:3</h1>
        </CardBody>
      </ContentWrapper>
    </>
  );
}

export default Help;
