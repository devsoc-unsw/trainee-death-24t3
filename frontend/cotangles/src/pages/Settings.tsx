import { DefaultCalendarForm } from "@/components/settings/default-calendar-form";
import "../App.css";
import { CardTop, CardBody, CardHeader } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import { DeleteAccountForm } from "@/components/settings/delete-account-form";

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
        <CardBody className="flex justify-between items-start">
          <div className="flex flex-col gap-y-4">
            <DefaultCalendarForm/>
              <a href="../help" className="flex gap-x-1">
              <p className="text-left text-[0.8em]">Need help getting your iCal link? Go to the help page for more information.</p>
              <SquareArrowOutUpRight className="scale-[80%]"/>
              </a>
          </div>
          <p><b>More features coming soon!</b></p>
          <DeleteAccountForm/>
        </CardBody>
    </>
  );
}

export default Settings;
