import "../App.css";
import { CardTop, CardBody, CardGIF, CardHeader } from "@/components/ui/card";

function Help() {
  return (
    <>
        {/* Title */}
        <CardTop>
          <CardHeader>
            <h1 className="text-g font-bold">How to import a new calendar</h1>
          </CardHeader>
        </CardTop>
        <CardBody>
        <div className="flex w-full justify-evenly gap-x-5">
          <div className="flex flex-col w-full items-center">
            <p className="text-lg font-semibold">Part 1: Get iCal link from myUNSW</p>
            <CardGIF>GIF 1</CardGIF>
          </div>
          <div className="flex flex-col w-full items-center">
            <p className="text-lg font-semibold">Part 2: Import to Cotangles</p>
            <CardGIF>GIF 2</CardGIF>
          </div>
        </div>
        <div className="flex w-full mt-6">
            <h2 className="text-lg font-bold">Contact Us</h2>
        </div>
        <div className="flex w-full">
            <h2 className="text-lg font-semibold">blabla@gmail.com</h2>
        </div>
      </CardBody>
    </>
  );
}

export default Help;
