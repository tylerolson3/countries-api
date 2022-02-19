import { createTheme } from "@mui/material/styles";

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
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default lightTheme;
