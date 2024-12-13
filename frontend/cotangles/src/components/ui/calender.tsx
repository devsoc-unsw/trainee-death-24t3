import React from "react";
import { Calendar, momentLocalizer, Event, Views as views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

// generate a unique colour based on the owner of an event
// https://medium.com/@sajclarke/how-to-populate-react-big-calendar-with-data-from-api-b89dc7362d8

interface MyCalendarProps {
  calendarData: Event[]
}


const MyCalendar: React.FC<MyCalendarProps> = ({ calendarData }) => {
  return (
    <div className="w-[95%] h-[90%]">
      <Calendar 
        localizer={localizer} 
        events={calendarData} 
        startAccessor="start" 
        endAccessor="end"
        views={[views.MONTH, views.WEEK, views.DAY]}
        selectable
        />
    </div>
  );
};

export default MyCalendar;
