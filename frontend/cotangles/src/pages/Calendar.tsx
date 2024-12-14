import MyCalendar from "@/components/ui/calender";
import "../App.css";
import { CardTop, CardBody, CardHeader, CardSidebar } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import getCalendarInfo from "../hooks/getCalendarInfo"
import { useState } from "react";
import { CalendarData, CalendarUserData } from "../types";
// import { Button } from "@/components/ui/button";
// import { Copy } from "lucide-react";

// const CopyLinkButton = () => {
//   const [isCopied, setIsCopied] = useState(false);

//   const handleCopyLink = async () => {
//     try {
//       await navigator.clipboard.writeText(window.location.href);
//       setIsCopied(true);
//       setTimeout(() => setIsCopied(false), 1000);
//     } catch (err) {
//       console.error('error:', err);
//     }
//   };

//   return (
//     <Button
//       className="h-[8%] focus:outline-2 focus:outline-black gap-1 align-self-end mt-3 ml-auto mr-5"
//       onClick={handleCopyLink}
//     >
//       {isCopied ? 'Copied!' : 'Copy link'}
//       <Copy className="w-4 h-4" />
//     </Button>
//   );
// };

function Calendar() {
  const [ calendarData, setCalendarData ] = useState<CalendarData[]>([]);
  const params = useParams();
  if (params.calendarId) {
    // TODO: change to all users
    getCalendarInfo(params.calendarId).response.then((data) => {
      if (data) {
        const calendarInput = data.calendarInfos.calendarUserData[0].calendarData
        calendarInput.map((event: CalendarData) => {
          event.start = new Date(event.start)
          event.end = new Date(event.end)
        })

        const userDataList: CalendarData[] = [];

        // console.log(data.calendarInfos.calendarUserData[0].calendarData)
        data.calendarInfost.calendaruserData.forEach((userData: CalendarUserData) => {
          userData.calendarData.forEach((data: CalendarData) => {
            userDataList.push(data);
          })
        })
        setCalendarData(data.calendarInfos.calendarUserData[0].calendarData)
      }
      else {
        console.error("Request failed");
      }
    });
  }

  const exampleUsers = [
    { userId: 1, userName: "Aron", isOwner: true, userColor: "#A7DBD8" },
    { userId: 2, userName: "Bron", isOwner: false, userColor: "#BAFCA2" },
    { userId: 3, userName: "Cron", isOwner: false, userColor: "#FFDB58" },
    { userId: 4, userName: "Dron", isOwner: false, userColor: "#FFA07A" },
    { userId: 5, userName: "Eron", isOwner: false, userColor: "#FFC0CB" },
    { userId: 6, userName: "Fron", isOwner: false, userColor: "#C4A1FF" },
    { userId: 7, userName: "Chad", isOwner: false, userColor: "#BAFCA2" }
  ];

  return (
    <>
      <div className="max-w-full min-w-full h-full flex gap-x-10">
      {/* Title */}
      <CardSidebar users={exampleUsers} calendarId={params.calendarId!}></CardSidebar>
        <div className="flex flex-col gap-y-5">
          <CardTop>
            <CardHeader>
              <h1>Calendar Name Here</h1>
            </CardHeader>
          </CardTop>
          {/* Body */}
          <CardBody>
            <MyCalendar calendarData={calendarData} />
            {/* <CopyLinkButton/> */}
          </CardBody>
        </div>
      </div>
    </>
  );
}

export default Calendar;
