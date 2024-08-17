import React from "react";

const Agenda = () => {
  return (
    <div className="calendar-container">
      <h2>Agenda des cours</h2>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=votre_lien_de_calendrier_externe&ctz=Europe/Paris"
        frameborder="0"
        scrolling="no"
      />
    </div>
  );
};

export default Agenda;
