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

  // when continent !== "" is true, it means the filter menu has a value, so display the filter by continent restults.
  // Else, if the searchField has more than one character in it, display the countries whose name matches the search field.
  // If neither the searchField or the continent filter is being used, display all countries
  let displaySearchOrFilterCountries =
    continent !== ""
      ? filteredResults
      : searchField.length > 1
      ? searchResults
      : countriesDisplay;

  return (
    <>
      {countryData.length < 1 ? (
        <CircularProgress sx={{ color: "teal", margin: "0 auto" }} size={80} />
      ) : (
        displaySearchOrFilterCountries
      )}
    </>
  );
};

export default AllCountriesDisplay;
