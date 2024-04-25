import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/saga-blue/theme.css";

const calendarStyles = `
  .p-component {
    border-radius: 15px;
  }
  .p-component,
  .p-datepicker-header {
    background-color: var(--midGreen);
    color: var(--paleGreen);
  }
  .p-datepicker-weekheader,
  .p-datepicker-weeknumber,
  .p-datepicker-year {
    display: none;
  }
  .p-datepicker-month,
  .p-icon {
    color: var(--paleGreen)
  }
`;

const CalendarComponent = () => {
  const [date, setDate] = useState(null);

  return (
    <div className="card flex justify-content-center">
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        inline
        showWeek
      />
      <style>{calendarStyles}</style>
    </div>
  );
};

export default CalendarComponent;