import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import styles from "../styles/styles";

const BackButton = ({ isDarkMode }) => {
  let displayColor = isDarkMode ? "dark" : "light";

  return (
    <Button
      // id="details--button"
      id={`details--button-${displayColor}`}
      variant="outlined"
      color="primary"
      sx={{ ...styles[8] }}
    >
      <Link
        color="secondary"
        to="/"
        className={`details--back-button-${displayColor}`}
      >
        <KeyboardBackspaceIcon sx={{ mr: "6px" }} /> Back
      </Link>
    </Button>
  );
};

export default BackButton;
