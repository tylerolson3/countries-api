import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "../styles/styles";

export default function ControlledOpenSelect(props) {
  const [open, setOpen] = React.useState(false);

  function handleChange(e) {
    let selectedContinent = e.target.value;
    props.setContinent(selectedContinent);
    props.setSearchField("");
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // on the drop down menu, each select option's text color can't be set by a MUI theme in dark Mode,
  // so you have to set it by className and maintaining state yourself
  let filterMenuId =
    props.mode === "light"
      ? "demo-controlled-open-select-label-light"
      : "demo-controlled-open-select-label-dark";

  return (
    <div>
      <FormControl color="secondary" sx={{ ...styles[16] }}>
        <InputLabel id={filterMenuId}>Filter By Region</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id={filterMenuId}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.continent}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">Filter By Region</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">America</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
