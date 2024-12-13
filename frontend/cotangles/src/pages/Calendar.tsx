import MyCalendar from "@/components/ui/calender";
import "../App.css";
import { CardTop, CardBody, CardHeader, CardSidebar } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import getCalendarInfo from "../../hooks/getCalendarInfo"
import { useState } from "react";
import {CalendarData} from "../types";


function Calendar() {
  const [ calendarData, setCalendarData ] = useState<CalendarData[]>([]);
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

  return (
    <>
      <div className="max-w-full min-w-full h-full flex gap-x-10">
      {/* Title */}
      <CardSidebar users={[{ userId: 1, userName: "Alice" }, { userId: 2, userName: "Bob" }]}></CardSidebar>
        <div className="flex flex-col gap-y-5">
          <CardTop>
            <CardHeader>
              <h1>Calendars</h1>
            </CardHeader>
          </CardTop>
          {/* Body */}
          <CardBody>
            <MyCalendar calendarData={calendarData}/>
          </CardBody>
        </div>
      </div>
    </>
  );
}

export default Calendar;
