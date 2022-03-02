import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import styles from "../styles/styles";

function BorderDisplay({ borderCountriesArray, isDarkMode }) {
  let navigate = useNavigate();

  let borderBoxClassName = isDarkMode
    ? "details--border-countries-dark"
    : "details--border-countries-light";

  function handleClick(countryCode) {
    navigate(`/details/${countryCode}`);
  }

  function borderCountriesList() {
    let displayBorderCountries;
    // if border countries array exists, map through it
    if (borderCountriesArray.length > 0) {
      displayBorderCountries = borderCountriesArray.map((item) => (
        <Box
          // color="primary"
          className={borderBoxClassName}
          onClick={() => handleClick(item.alpha3Code)}
          key={item.alpha3Code}
          sx={{ ...styles[22] }}
        >
          {item.name}
        </Box>
      ));
      return displayBorderCountries;
    } else {
      // if the display country has no border countries, assign it's value to an empty string
      displayBorderCountries = " None";
      return displayBorderCountries;
    }
  }

  return (
    <div>
      <br />
      <span>
        <Box component="span" sx={{ ...styles[23] }}>
          <strong>Border Countries:</strong>
        </Box>
        {borderCountriesList()}
      </span>
    </div>
  );
}

export default BorderDisplay;
