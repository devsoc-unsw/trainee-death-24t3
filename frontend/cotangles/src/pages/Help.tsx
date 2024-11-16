import "../App.css";
import { CardTop, CardBody, CardHeader } from "@/components/ui/card";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { NavigationCotangles } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

function Help() {
  return (
    <>
      <NavigationCotangles />
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
