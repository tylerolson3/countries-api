import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import styles from "../styles/styles";

export default function ButtonAppBar({ isDarkMode, setIsDarkMode }) {
  let buttonDisplay = isDarkMode ? "Light Mode" : "Dark Mode";
  return (
    <AppBar
      color="primary"
      sm={4}
      className="app-bar"
      position="static"
      sx={{ ...styles[17] }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          color="secondary"
          sx={{ ...styles[18] }}
        >
          Where in the world?
        </Typography>
        <Button
          color="secondary"
          onClick={() => setIsDarkMode((prevState) => !prevState)}
          sx={{ ...styles[19] }}
        >
          <DarkModeOutlinedIcon
            className="dark-mode-icon"
            sx={{ ...styles[20] }}
          />
          {buttonDisplay}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
