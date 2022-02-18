import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const style = {
  formControl: {
    width: { xs: "53vw", sm: "95%" },
    marginBottom: { xs: "1.5rem", sm: "0" },
    marginTop: { sm: "23px" },
  },
};

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

  let filterMenuId =
    props.mode === "light"
      ? "demo-controlled-open-select-label-light"
      : "demo-controlled-open-select-label-dark";

  return (
    <div>
      <FormControl
        color="secondary"
        sx={{
          ...style.formControl,
          m: 1,
          minWidth: 220,
          // backgroundColor: "primary.main",
          // marginBottom: "0",
          // marginBottom: "2rem",
          // width: "93vw",
          color: "blue",
          // bgcolor: "red",
        }}
      >
        {/* <InputLabel id="demo-controlled-open-select-label"> */}
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
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}

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

// function FilterCountries(props) {
//   function handleChange(e) {
//     let selectedContinent = e.target.value;
//     props.setContinent(selectedContinent);
//     props.setSearchField("");
//   }

//   return (
//     <div className={`${props.continent} ok`}>
//       <h3>Filter By Region</h3>
//       <form>
//         <select onChange={handleChange} value={props.continent}>
//           <option select value="">
//             Filter By Region
//           </option>
//           <option value="Africa">Africa</option>
//           <option value="Americas">America</option>
//           <option value="Asia">Asia</option>
//           <option value="Europe">Europe</option>
//           <option value="Oceania">Oceania</option>
//         </select>
//       </form>
//     </div>
//   );
// }

// export default FilterCountries;
