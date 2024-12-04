import React, { useState } from "react";
import { Calendar, momentLocalizer, Event, Views as views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

// generate a unique colour based on the owner of an event
// https://medium.com/@sajclarke/how-to-populate-react-big-calendar-with-data-from-api-b89dc7362d8


const MyCalendar: React.FC = () => {
  const today = new Date();
  const hourafter = new Date(new Date().getTime() + 60 * 60 * 1000);
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  const event1 = {
    title: "Sample Event",
    start: today,
    end: tomorrow,
    allDay: true,
  }
  const event2 = {
    title: "wowwww",
    start: today,
    end: hourafter,
    allDay: false
  }

  
  const [events] = useState<Event[]>([
    event1, event2
  ]);


  return (
    <div className="w-[95%] h-[90%]">
      <Calendar 
        localizer={localizer} 
        events={events} 
        startAccessor="start" 
        endAccessor="end"
        views={[views.MONTH, views.WEEK]}
        />
    </div>
  );
};

export default MyCalendar;
