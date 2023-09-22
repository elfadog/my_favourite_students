import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse } from 'date-fns';
import { startOfDay, endOfDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import DatePicker from "react-datepicker";


const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfDay,
  endOfDay,
  locale: enUS,
});

const MyCalendar = () => {
  const events = [
    {
      title: 'Event 1',
      start: new Date(2023, 8, 25),
      end: new Date(2023, 8, 27),
    },
    {
      title: 'Event 2',
      start: new Date(2023, 8, 29),
      end: new Date(2023, 8, 30),
    },
    // Add more events as needed
  ];

  return (
    <div style={{ height: '250px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '20px' }}
      />
    </div>
  );
};

export default MyCalendar;
