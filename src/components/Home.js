import { useState } from "react";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import CountryCard from "./CountryCard";
import FilterCountries from "./FilterCountries";
import Search from "./Search";
import "../App.css";

const style = {
  searchAndFilterBox: {
    display: { sm: "flex" },
    padding: { sm: "48px 74px" },
    paddingLeft: { sm: "68px" },
  },
  cardDisplay: {
    margin: { xs: "0", sm: "0 80px" },
    marginLeft: { xs: "55px" },
    // padding: { xs: "0 10px" },
    rowGap: { xs: "40px", sm: "60px" },
    marginTop: { xs: "10px" },
  },
};

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

  //   let continentDisplay = continent !== "" ? filteredResults : countriesDisplay;

  //   let searchDisplay = searchField.length > 1 ? searchResults : countriesDisplay;

  let displaySearchOrFilterCountries =
    continent !== ""
      ? filteredResults
      : searchField.length > 1
      ? searchResults
      : countriesDisplay;

  return (
    <Box>
      {/* <div className="my-container"> */}
      <Box
        bgcolor="background"
        sx={{
          ...style.searchAndFilterBox,
          justifyContent: "space-between",
          // padding: "48px 74px",
          margin: "auto 0",
          // backgroundColor: "red",
        }}
      >
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
          sx={{
            width: "200vw",
            backgroundColor: "green",
          }}
        />
      </Box>
      <Box
        sx={{
          ...style.cardDisplay,
          // margin: "0 80px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          // rowGap: "60px",
          // padding: "0 80px",
          // flex: "1 0 40px",
          // maxWidth: "1280px",
          // columnGap: "14px",
        }}
      >
        {displaySearchOrFilterCountries}
      </Box>
    </Box>
  );
}

export default Home;

{
  /* <div className="toolbar-display">
<Search
  countryData={countryData}
  searchField={searchField}
  setSearchField={setSearchField}
  setContinent={setContinent}
  continent={continent}
/>
<FilterCountries
  countryData={countryData}
  continent={continent}
  setContinent={setContinent}
  searchField={searchField}
  setSearchField={setSearchField}
/>
</div> */
}
