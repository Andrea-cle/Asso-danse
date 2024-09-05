import { StrictMode } from "react"; // détecte les problèmes potentiels dans l'application, effectue des vérifications supplémentaires pendant le dévelopement sans affecter le rendu
import { createRoot } from "react-dom/client"; //Créé une racine qui gère le rendu de l'application de manière plus efficace
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
