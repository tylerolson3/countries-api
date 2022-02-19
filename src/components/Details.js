import { Link, useParams } from "react-router-dom";
import BorderDisplay from "./BorderDisplay";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import styles from "../styles/styles";

function Details({ countryData, isDarkMode }) {
  let { abbrev } = useParams();

  // find the object array of the country page were currenlty on
  let selectedCountry = countryData.filter(
    (country) => country.alpha3Code === abbrev
  );

  // convert the array object to an object
  let country = selectedCountry[0];
  console.log("selected country", country);

  //  get the array of border countries
  let borderCountriesArray = country.borders;

  // from the country data, return the border countries array object for the given country

  // let findBorderCountries = countryData.filter((item) =>
  //   borderCountriesArray.includes(item.alpha3Code)
  // );

  let findBorderCountries;
  if (country.borders) {
    findBorderCountries = countryData.filter((item) =>
      borderCountriesArray.includes(item.alpha3Code)
    );
  } else {
    findBorderCountries = [];
  }

  console.log("found border coutnries", findBorderCountries);

  let displayColor = isDarkMode ? "dark" : "light";

  return (
    <Box sx={{ ...styles[7] }}>
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

      <Box sx={{ ...styles[9] }}>
        <Box sx={{ ...styles[10] }}>
          <img src={country.flag} className="details--flag" width="100%" />
        </Box>
        <Box sx={{ ...styles[11] }}>
          <Box sx={{ ...styles[12] }}>
            <Typography sx={{ ...styles[13] }}>{country.name}</Typography>
            <Box sx={{ ...styles[14] }}>
              <Box sx={{ ...styles[15] }}>
                <p>
                  <strong>Native Name:</strong> {country.nativeName}
                </p>
                <p>
                  <strong>Population:</strong> {country.population}
                </p>
                <p>
                  <strong>Region:</strong> {country.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {country.subregion}
                </p>
                <p>
                  <strong>Capital:</strong> {country.capital}
                </p>
              </Box>
              <Box>
                <p>
                  <strong>Top Level Domain:</strong> {country.topLevelDomain}
                </p>
                <p>
                  <strong>Currencies:</strong> {country.currencies[0].name}
                </p>
                <p>
                  <strong>Languages:</strong> {country.languages[0].name}
                </p>
              </Box>
            </Box>
            <BorderDisplay
              findBorderCountries={findBorderCountries}
              isDarkMode={isDarkMode}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Details;
