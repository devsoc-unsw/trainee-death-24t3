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
        {/* Body */}
        <CardBody>
          <div className="flex gap-24 w-full">
            <h2 className="text-lg font-semibold">Part 1: Get iCal link from myUNSW</h2>
            <h2 className="text-lg font-semibold">Part 2: Import to Cotangles</h2>
          </div>
          <br>
          </br>
          <div className="flex justify-between w-full">
            <CardGIF>GIF 1</CardGIF>
            <CardGIF>GIF 2</CardGIF>
          </div>
          <br>
          </br>
          <div className="flex justify-between w-full">
            <h2 className="text-lg font-bold">Contact Us</h2>
          </div>
          <div className="flex justify-between w-full">
            <h2 className="text-lg font-semibold">blabla@gmail.com</h2>
          </div>
        </CardBody>
    </>
  );
}

export default Help;
