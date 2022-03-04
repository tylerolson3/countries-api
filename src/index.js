import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CountriesContextProvider } from "./context/CountriesContext";

ReactDOM.render(
  <React.StrictMode>
    <CountriesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountriesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
