import "../App.css";
import { CardTop, CardBody, CardHeader } from "@/components/ui/card";
import { ContentWrapper } from "@/components/ui/content-wrapper";

function Settings() {
  return (
    <>
      <ContentWrapper>
        {/* Title */}
        <CardTop>
          <CardHeader>
            <h1>Settings</h1>
          </CardHeader>
        </CardTop>
        {/* Body */}
        <CardBody>
          <h1>owo</h1>
        </CardBody>
      </ContentWrapper>
    </>
  );
}

export default Settings;
