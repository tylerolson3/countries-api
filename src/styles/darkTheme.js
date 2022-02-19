import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
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
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default darkTheme;
