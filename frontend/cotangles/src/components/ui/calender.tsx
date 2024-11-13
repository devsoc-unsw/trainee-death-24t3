import React, { useState } from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar: React.FC = () => {
  const [events] = useState<Event[]>([
    {
      title: 'Sample Event',
      start: new Date(),
      end: new Date(),
      allDay: false,
    },
  ]);

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default MyCalendar;