import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Details from "./components/Details";
import Home from "./components/Home";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountriesContextProvider } from "./context/CountriesContext";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "./styles/styles";
import lightTheme from "./styles/lightTheme";
import darkTheme from "./styles/darkTheme";

console.log("styles", styles);

function App() {
  const [countryData, setCountryData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);

  let displayTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <>
      <CountriesContextProvider>
        <ThemeProvider theme={displayTheme}>
          <CssBaseline />
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Home countryData={countryData} isDarkMode={isDarkMode} />
                }
              />
              <Route
                path="/details/:abbrev"
                element={
                  <Details countryData={countryData} isDarkMode={isDarkMode} />
                }
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CountriesContextProvider>
    </>
  );
}

export default App;
