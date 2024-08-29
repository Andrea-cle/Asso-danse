import React from "react";

const Calendar = () => {
  return (
    <div className="calendar-container">
      <h2>Agenda des cours</h2>
      <iframe
        src="danse-margaux-front\public\Agenda-2024.jpg"
        // src="https://calendar.google.com/calendar/embed?src=votre_lien_de_calendrier_externe&ctz=Europe/Paris"
        frameborder="0"
        scrolling="no"
        alt="Agenda des cours pour 2024"
      />
    </div>
  );
};

export default Calendar;
