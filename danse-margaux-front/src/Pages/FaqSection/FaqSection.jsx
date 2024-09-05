import React, { useState } from "react";

// Le composant FAQSection reçoit les questions (faqs) en tant que prop
const FAQSection = ({ faqs }) => {
  // Le hook useState permet de gérer l'état de la question active
  const [activeIndex, setActiveIndex] = useState(null);

  //   cette fonction est déclenchée lorsqu'une question est cliquée
  const handleClick = (index) => {
    // Si la question cliquée est déjà active, la désactiver (fermer) en mettant l'index à null
    // Sinon, définir cette question comme active
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      {/*Boucle sur chaque question (faq) pour les afficher*/}
      {faqs.map((faq, index) => (
        <div key={index}>
          {/*le bouton affiche la question*/}
          <button onClick={() => handleClick(index)}>{faq.question}</button>
          {/*Si la question est active, la réponse s'affichera*/}
          {activeIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
