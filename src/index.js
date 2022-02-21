import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CountriesContextProvider } from "./context/CountriesContext";

ReactDOM.render(
  <React.StrictMode>
    <CountriesContextProvider>
      <App />
    </CountriesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
