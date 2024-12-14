import MyCalendar from "@/components/ui/calender";
import "../App.css";
import { CardTop, CardBody, CardHeader, CardSidebar } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import getCalendarInfo from "../hooks/getCalendarInfo"
import { useState } from "react";
import { CalendarData, CalendarUserData } from "../types";
import removeUserFetcher from "@/hooks/removeUserFetcher";
import inviteCalendar from "@/hooks/inviteCalendar";

type User = {
  userName: string;
  userId: string;
  userColor: string; 
  isOwner: boolean; 
};

function Calendar() {
  const [ calendarData, setCalendarData ] = useState<CalendarData[]>([]);
  const [ users, setUsers ] = useState<User[]>([]);
  const [ calendarName, setCalendarName ] = useState("Calendar Name");


  const params = useParams();

  // CODE BELOW IS SUPER CURSED
  if (params.calendarId) {
    const userColors = ["#A7DBD8", "#BAFCA2", "#FFDB58", "#FFA07A", "#FFC0CB", "#C4A1FF", "#BAFCA2"];
    let count = 0;

    getCalendarInfo(params.calendarId).response.then((data) => {
      if (data) {
        const userDataList: CalendarData[] = [];
        const usersList: User[] = [];

        setCalendarName(data.calendarInfos.name);

        // console.log(data.calendarInfos.calendarUserData[0].calendarData)
        data.calendarInfos.calendarUserData.forEach((userData: CalendarUserData) => {
          const color = userColors[count % userColors.length];
          const newUser: User = {
            userId: userData.userId,
            userName: userData.name,
            isOwner: false,
            userColor: color
          }

          usersList.push(newUser);
          count++;

          if (userData) {
            userData.calendarData.forEach((data: CalendarData) => {
              data.start = new Date(data.start);
              data.end = new Date(data.end);
              userDataList.push(data);
            })
          }
        })

        setUsers(usersList);
        setCalendarData(userDataList);
      }
      else {
        console.error("Request failed");
      }
    });
  }

  const kickUser = async (userId: string) => {
    // TODO: connect backend to remove user from calendar
    await removeUserFetcher(params.calendarId!, userId)
    setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== userId));
  };

  const inviteUser = async (email: string) => {
    // TODO: connect backend to send user invite
    await inviteCalendar(params.calendarId!, email);
    console.log(`Inviting user with email: ${email}`); //
  };

 
  return (
    <>
      <div className="max-w-full min-w-full h-full flex gap-x-10">
      {/* Title */}
      <CardSidebar users={users} onInviteUser={inviteUser} onKickUser={kickUser}></CardSidebar>
        <div className="flex flex-col gap-y-5">
          <CardTop>
            <CardHeader>
              <h1>{calendarName}</h1>
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
