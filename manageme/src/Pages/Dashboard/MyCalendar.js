import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './MyCalendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  // Format the selected date to display only the date portion
  const formattedDate = date.toLocaleDateString();

  return (
      <div className='calendar-container'>
        <div className="selected-date">
          <p>{formattedDate}</p>
        </div>
        <Calendar
          onChange={setDate}
          value={date}
        />
      </div>
  );
}

export default MyCalendar;
