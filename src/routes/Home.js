import { useState } from "react";
import Box from "@mui/material/Box";
import AllCountriesDisplay from "../components/AllCountriesDisplay";
import FilterCountries from "../components/FilterCountries";
import Search from "../components/Search";
import AnimatePage from "../components/AnimatePage";
import LoadingSpinner from "../components/LoadingSpinner";
import "../App.css";
import styles from "../styles/styles";

function Home({ countryData, isDarkMode }) {
  const [continent, setContinent] = useState("");
  const [searchField, setSearchField] = useState("");

  let mode = isDarkMode ? "dark" : "light";

  return (
    <>
      {countryData.length < 1 ? (
        <LoadingSpinner />
      ) : (
        <AnimatePage>
          <Box>
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
            <Box sx={{ ...styles[2] }}>
              <AllCountriesDisplay
                isDarkMode={isDarkMode}
                countryData={countryData}
                continent={continent}
                searchField={searchField}
                mode={mode}
              />
            </Box>
          </Box>
        </AnimatePage>
      )}
    </>
  );
}

export default Home;
