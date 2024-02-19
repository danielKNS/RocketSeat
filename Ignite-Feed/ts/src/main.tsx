import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

// Dom = Document Object model => a nossa represetaçao da nossa HTML atravez javascript

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
