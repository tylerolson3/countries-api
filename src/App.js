import { useEffect, useState, useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Details from "./routes/Details";
import Home from "./routes/Home";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, useLocation } from "react-router-dom";
import { CountriesContext } from "./context/CountriesContext";
import { AnimatePresence } from "framer-motion";
import CssBaseline from "@mui/material/CssBaseline";
import lightTheme from "./styles/lightTheme";
import darkTheme from "./styles/darkTheme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { countryData, setCountryData } = useContext(CountriesContext);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
        console.log(data.slice(0, 20));
      });
  }, []);

  let displayTheme = isDarkMode ? darkTheme : lightTheme;

  const location = useLocation();

  return (
    <>
      <ThemeProvider theme={displayTheme}>
        <CssBaseline />
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            {/* <Routes> */}
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
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
