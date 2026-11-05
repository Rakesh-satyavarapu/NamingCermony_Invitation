import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/styles/variables.css";
import "./assets/styles/global.css";
import "./assets/styles/animations.css";
import "./assets/styles/sections.css";

import App from "./App";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);