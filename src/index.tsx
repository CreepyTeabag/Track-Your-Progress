import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SkillsProvider } from "./context/SkillsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SkillsProvider>
      <App />
    </SkillsProvider>
  </React.StrictMode>
);
