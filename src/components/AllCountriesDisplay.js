import React from "react";
import CountryCard from "./CountryCard";
import CircularProgress from "@mui/material/CircularProgress";

const AllCountriesDisplay = ({ countryData, continent, searchField, mode }) => {
  // this will display the CountryCard of every country
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

  // only display the countries whose continent value matches the selected value of
  //  'filter by region' drop down menu
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

  // only display countries whose name is included in the search bar text
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

  function countryCardsDisplay() {
    // when 'filter by continent' has a value, display the countires matching the selected continent value
    if (continent !== "") {
      return filteredResults;
    } else if (searchField.length > 1) {
      // if the user is typing characters into the search field, display the search results
      return searchResults;
    } else {
      // if neither search field or filter by continent is being used, then display all countries
      return countriesDisplay;
    }
  }

  return (
    <>
      {countryData.length < 1 ? (
        <CircularProgress sx={{ color: "teal", margin: "0 auto" }} size={80} />
      ) : (
        countryCardsDisplay()
      )}
    </>
  );
};

export default AllCountriesDisplay;
