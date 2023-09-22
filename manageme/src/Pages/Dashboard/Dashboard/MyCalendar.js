import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse } from 'date-fns';
import { startOfDay, endOfDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the DatePicker CSS

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfDay,
  endOfDay,
  locale: enUS,
});

const MyCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with the current date
  
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
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="MM/dd/yyyy"
          />
        </div>
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
  
