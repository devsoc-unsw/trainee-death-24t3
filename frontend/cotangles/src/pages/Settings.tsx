import "../App.css";
import { CardTop, CardBody, CardHeader } from "@/components/ui/card";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { NavigationCotangles } from "@/components/ui/navigation-menu";

function Settings() {
  return (
    <>
      <NavigationCotangles />
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
