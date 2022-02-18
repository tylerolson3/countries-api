import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const style = {
  appBar: {
    // backgroundColor: { xs: "red", sm: "blue", md: "green" },
    padding: { xs: "6px 0", sm: "8px 60px" },
  },
  typography: {
    marginTop: { xs: "11px" },
    fontSize: { xs: "16px", sm: "24px" },
  },
  darkModeIcon: { transform: "scale(0.7)" },
  button: {
    fontSize: { xs: "12px", sm: "16px" },
    marginTop: { xs: "9px" },
  },
};

export default function ButtonAppBar({ isDarkMode, setIsDarkMode }) {
  // console.log("header props", isDarkMode);

  let buttonDisplay = isDarkMode ? "Light Mode" : "Dark Mode";
  return (
    <AppBar
      color="primary"
      sm={4}
      className="app-bar"
      position="static"
      sx={{
        ...style.appBar,
        // color: "orange",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0562443)",
        // height: "80px",
        // padding: "0 60px",
        // backgroundColor: "#fff",
        // height: "100%",
        marginBottom: "0px",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          color="secondary"
          sx={{
            ...style.typography,
            flexGrow: 1,
            // color: "black",
            fontWeight: "800",
            padding: "0",
            // display: "flex",
            // alignItems: "end",
            height: "100%",
            // marginBottom: "2px",
          }}
        >
          Where in the world?
        </Typography>
        <Button
          color="secondary"
          onClick={() => setIsDarkMode((prevState) => !prevState)}
          sx={{
            ...style.button,
            // color: "#111517",
            fontWeight: "600",
          }}
        >
          <DarkModeOutlinedIcon
            className="dark-mode-icon"
            sx={{ ...style.darkModeIcon }}
          />
          {buttonDisplay}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

{
  /* <Box sx={{ flexGrow: 1 }}>
<AppBar position="static">
  <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
</Box> */
}
