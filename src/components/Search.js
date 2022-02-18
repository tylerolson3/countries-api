import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import SearchIcon from "@mui/icons-material/Search";

// const style = {
//   box: {
//     // "& > :not(style)": '{ m: 1, width: "25ch" }',
//     // padding: "0 0",
//     // "& > :not(style)": { sm: { m: 1, width: "25ch" } },
//     // "& > :not(style)": { xl: "none" },
//     width: "100vw",
//   },
// };

const style = {
  box: {
    // minWidth: { xs: "262px", sm: "262px" },
    // maxWidth: { sm: "40vw" },
    width: { xs: "93vw", sm: "480px" },
    minWidth: { sm: "200px" },
    marginLeft: { xs: "11px" },
  },
};

export default function Search(props) {
  console.log("serach props", props);
  function handleChange(e) {
    let boxText = e.target.value;
    props.setSearchField(boxText);
    if (boxText.length > 1) {
      props.setContinent("");
    }
  }

  // let mode = isDarkMode ? "search-field-dark" : "search-field-light";
  // console.log(mode);
  // console.log("search is darkMode?", props.isDarkMode);
  // console.log("search mode", props.mode);

  let textFieldId =
    props.mode === "light" ? "search-field-light" : "search-field-dark";

  return (
    <Box
      component="form"
      sx={{
        ...style.box,
        marginY: "25px",
      }}
      noValidate
      autoComplete="off"
    >
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

// function Search(props) {
//   function handleChange(e) {
//     let boxText = e.target.value;
//     props.setSearchField(boxText);
//     if (boxText.length > 1) {
//       props.setContinent("");
//     }
//   }

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           placeholder="Search for a country.."
//           onChange={handleChange}
//           value={props.searchField}
//         />
//       </form>
//     </div>
//   );
// }

// export default Search;
