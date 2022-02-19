import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import styles from "../styles/styles";

// const style = {
//   borderTitle: {
//     display: { xs: "block", sm: "inline-block" },
//   },
// };

function BorderDisplay({ findBorderCountries, isDarkMode }) {
  let navigate = useNavigate();

  console.log("details page dark mode", isDarkMode);

  let borderBoxClassName = isDarkMode
    ? "details--border-countries-dark"
    : "details--border-countries-light";

  function handleClick(countryCode) {
    console.log(countryCode);
    navigate(`/details/${countryCode}`);
  }

  let displayBorderCountries;

  // if border countries array exists, map through it
  if (findBorderCountries.length > 0) {
    displayBorderCountries = findBorderCountries.map((item) => (
      <Box
        // color="primary"
        className={borderBoxClassName}
        onClick={() => handleClick(item.alpha3Code)}
        key={item.alpha3Code}
        // sx={{ display: "inline-block" }}
        sx={{ ...styles[22] }}
      >
        {item.name}
      </Box>
    ));
  } else {
    // if the display country has no border countries, assign it's value to an empty string
    displayBorderCountries = "";
  }

  return (
    <div>
      <br />
      <span>
        <Box component="span" sx={{ ...styles[23] }}>
          <strong>Border Countries:</strong>
        </Box>
        {displayBorderCountries}
      </span>
    </div>
  );
}

export default BorderDisplay;