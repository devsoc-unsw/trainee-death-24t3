import { DefaultCalendarForm } from "@/components/settings/default-calendar-form";
import "../App.css";
import { CardTop, CardBody, CardHeader } from "@/components/ui/card";

function Settings() {
  return (
    <>
        {/* Title */}
        <CardTop>
          <CardHeader>
            <h1>Settings</h1>
          </CardHeader>
        </CardTop>
        {/* Body */}
        <CardBody className="flex justify-start items-start gap-y-2">
          <p><b>My calendar</b></p>
          <DefaultCalendarForm/>
        </CardBody>
    </>
  );
}

export default Settings;
