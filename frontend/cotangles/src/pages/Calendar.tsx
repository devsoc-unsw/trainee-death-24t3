import MyCalendar from "@/components/ui/calender";
import "../App.css";
import { CardTop, CardBody, CardHeader, CardSidebar } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import getCalendarInfo from "../hooks/getCalendarInfo"
import { useState } from "react";
import { CalendarData } from "../types";
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
  const [calendarData, setCalendarData] = useState<CalendarData[]>([]);
  
  const [users, setUsers] = useState([
    { userId: 1, userName: "Aron", isOwner: true, userColor: "#A7DBD8" },
    { userId: 2, userName: "Bron", isOwner: false, userColor: "#BAFCA2" },
    { userId: 3, userName: "Cron", isOwner: false, userColor: "#FFDB58" },
    { userId: 4, userName: "Dron", isOwner: false, userColor: "#FFA07A" },
    { userId: 5, userName: "Eron", isOwner: false, userColor: "#FFC0CB" },
    { userId: 6, userName: "Fron", isOwner: false, userColor: "#C4A1FF" },
    { userId: 7, userName: "Chad", isOwner: false, userColor: "#BAFCA2" },
  ]);

  const params = useParams();
  if (params.calendarId) {
    // TODO: change to all users
    getCalendarInfo(params.calendarId).response.then((data) => {
      const calendarInput = data.calendarInfos.calendarUserData[0].calendarData
      calendarInput.map((event: CalendarData) => {
        event.start = new Date(event.start)
        event.end = new Date(event.end)
      })
      // console.log(data.calendarInfos.calendarUserData[0].calendarData)
      setCalendarData(data.calendarInfos.calendarUserData[0].calendarData)
    });
  }

  // const [users, setUsers] = useState([
  //   { userId: 1, userName: "Aron", isOwner: true, userColor: "#A7DBD8" },
  //   { userId: 2, userName: "Bron", isOwner: false, userColor: "#BAFCA2" },
  //   { userId: 3, userName: "Cron", isOwner: false, userColor: "#FFDB58" },
  //   { userId: 4, userName: "Dron", isOwner: false, userColor: "#FFA07A" },
  //   { userId: 5, userName: "Eron", isOwner: false, userColor: "#FFC0CB" },
  //   { userId: 6, userName: "Fron", isOwner: false, userColor: "#C4A1FF" },
  //   { userId: 7, userName: "Chad", isOwner: false, userColor: "#BAFCA2" },
  // ]);

  const kickUser = (userId: number) => {
    // TODO: connect backend to remove user from calendar
    setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== userId));
  };

  // Function to invite a user
  const inviteUser = (email: string) => {
    // TODO: connect backend to send user invite
    console.log(`Inviting user with email: ${email}`); //
  };

  return (
    <>
      <div className="max-w-full min-w-full h-full flex gap-x-10">
      {/* Title */}
      <CardSidebar users={users} onKickUser={kickUser} onInviteUser={inviteUser}></CardSidebar>
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
