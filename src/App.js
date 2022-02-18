import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Details from "./components/Details";
import Home from "./components/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  console.log("COUNTRIES", countryData);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        // let firstSixty = data.slice(0, 100);
        setCountryData(data);
      });
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: "'Nunito Sans', sans-serif;",
      button: {
        textTransform: "none",
      },
    },
    palette: {
      // mode: "light",
      primary: {
        main: "#2B3844", //   white plain is header background color
      },

      secondary: {
        // main: "#f2f2f2",
        main: "#fff", //   THIS IS THE TEXT COLOR FOR THE HEADER
      },
      background: {
        paper: "#202C36", // red
        // paper: "#fff", // red
        default: "#202C36", // orange
        // default: "#fff", // orange
      },
      text: {
        primary: "#fff", /// dropdown menu text color
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 420,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const lightTheme = createTheme({
    typography: {
      fontFamily: "'Nunito Sans', sans-serif;",
      button: {
        textTransform: "none",
      },
    },
    palette: {
      // mode: "light",
      primary: {
        main: "#fff", //   white plain is header background color
      },

      secondary: {
        // main: "#f2f2f2",
        main: "#111517", //   THIS IS THE TEXT COLOR FOR THE HEADER
      },
      background: {
        paper: "#FAFAFA", // red
        // paper: "#fff", // red
        default: "#FAFAFA", // orange
        // default: "#fff", // orange
      },
      text: {
        primary: "#111517", /// dropdown menu text color
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 420,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  console.log("theme", lightTheme);

  let displayTheme = isDarkMode ? theme : lightTheme;

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
