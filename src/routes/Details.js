import { useParams } from "react-router-dom";
import { useContext } from "react";
import BorderDisplay from "../components/BorderDisplay";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CountriesContext } from "../context/CountriesContext";
import styles from "../styles/styles";
import CountryFacts from "../components/CountryFacts";
import BackButton from "../components/BackButton";
import AnimatePage from "../components/AnimatePage";

function Details({ isDarkMode }) {
  const { abbrev } = useParams();

  const { countryData, getBorderCountriesFullName } =
    useContext(CountriesContext);

  // Find the individual country object within the countries array where the country abbrevation (abbrev)
  // is equal to the country abbrev pararameter of page that were currently on
  let selectedCountry = countryData.filter(
    (country) => country.alpha3Code === abbrev
  );

  // convert the object-array to an object
  let country = selectedCountry[0];

  return (
    <AnimatePage>
      <Box sx={{ ...styles[7] }}>
        <BackButton isDarkMode={isDarkMode} />
        <Box sx={{ ...styles[9] }}>
          <Box sx={{ ...styles[10] }}>
            <img src={country.flag} className="details--flag" width="100%" />
          </Box>

          <Box sx={{ ...styles[11] }}>
            <Box sx={{ ...styles[12] }}>
              <Typography sx={{ ...styles[13] }}>{country.name}</Typography>
              <CountryFacts country={country} />
              <BorderDisplay
                borderCountriesArray={getBorderCountriesFullName(country)}
                isDarkMode={isDarkMode}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </AnimatePage>
  );
}

export default Details;
