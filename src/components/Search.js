import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "../styles/styles";

export default function Search(props) {
  function handleChange(e) {
    let boxText = e.target.value;
    props.setSearchField(boxText);
    if (boxText.length > 1) {
      props.setContinent("");
    }
  }

  let textFieldId =
    props.mode === "light" ? "search-field-light" : "search-field-dark";

  return (
    <Box component="form" sx={{ ...styles[21] }} noValidate autoComplete="off">
      <TextField
        fullWidth
        id={textFieldId}
        label="Search for a country..."
        variant="filled"
        onChange={handleChange}
        value={props.searchField}
        type="text"
      />
    </Box>
  );
}
