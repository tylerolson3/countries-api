import { useContext } from "react";
import Box from "@mui/material/Box";
import { CountriesContext } from "../context/CountriesContext";
import styles from "../styles/styles";

const CountryFacts = ({ country }) => {
  const { numberWithCommas } = useContext(CountriesContext);
  return (
    <Box sx={{ ...styles[14] }}>
      <Box sx={{ ...styles[15] }}>
        <p>
          <strong>Native Name:</strong> {country.nativeName}
        </p>
        <p>
          <strong>Population:</strong>
          {numberWithCommas(country.population)}
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
  );
};

export default CountryFacts;
