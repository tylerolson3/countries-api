import { useState } from "react";
import Box from "@mui/material/Box";
import CountryCard from "./CountryCard";
import FilterCountries from "./FilterCountries";
import Search from "./Search";
import "../App.css";
import styles from "../styles/styles";

function Home({ countryData, isDarkMode }) {
  const [continent, setContinent] = useState("");
  const [searchField, setSearchField] = useState("");
  console.log("Home dark mode", isDarkMode);

  let mode = isDarkMode ? "dark" : "light";
  console.log("is mode undefined?", mode);

  const countriesDisplay = countryData.map((item) => {
    return (
      <CountryCard
        name={item.name}
        flag={item.flag}
        pop={item.population}
        region={item.region}
        capital={item.capital}
        abbrev={item.alpha3Code}
        key={item.alpha3Code}
        mode={mode}
      />
    );
  });

  let filteredResults = countryData
    .filter((item) => item.region === continent)
    .map((item) => {
      return (
        <CountryCard
          name={item.name}
          flag={item.flag}
          pop={item.population}
          region={item.region}
          capital={item.capital}
          abbrev={item.alpha3Code}
          key={item.alpha3Code}
          mode={mode}
        />
      );
    });

  let searchResults = countryData
    .filter((item) =>
      item.name.toLowerCase().includes(searchField.toLowerCase())
    )
    .map((item) => {
      return (
        <CountryCard
          name={item.name}
          flag={item.flag}
          pop={item.population}
          region={item.region}
          capital={item.capital}
          abbrev={item.alpha3Code}
          key={item.alpha3Code}
          mode={mode}
        />
      );
    });

  // when continent !== "" is true, it means the filter menu is being used, so display the
  // filter by continent restults.  Else, if the search box has more than one char, display the search
  // field results.  If the search box is not being used, display the entire countries array
  let displaySearchOrFilterCountries =
    continent !== ""
      ? filteredResults
      : searchField.length > 1
      ? searchResults
      : countriesDisplay;

  return (
    <Box>
      {/* <div className="my-container"> */}
      <Box bgcolor="background" sx={{ ...styles[1] }}>
        <Search
          mode={mode}
          countryData={countryData}
          searchField={searchField}
          setSearchField={setSearchField}
          setContinent={setContinent}
          continent={continent}
          sx={{
            width: "80vw",
          }}
        />
        <FilterCountries
          mode={mode}
          countryData={countryData}
          continent={continent}
          setContinent={setContinent}
          searchField={searchField}
          setSearchField={setSearchField}
          sx={{ ...styles[3] }}
        />
      </Box>
      <Box sx={{ ...styles[2] }}>{displaySearchOrFilterCountries}</Box>
    </Box>
  );
}

export default Home;
