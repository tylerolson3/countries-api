import { Link, useParams } from "react-router-dom";
import BorderDisplay from "./BorderDisplay";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const style = {
  countryTitle: {
    fontSize: { xs: "24px", sm: "32px" },
  },
  box1: {
    margin: { xs: "30px 17px", sm: "40px 80px" },
  },
  box2: {
    flexDirection: { xs: "column", sm: "row" },
  },
  box3: {
    maxWidth: { sm: "40vw" },
    minWidth: { xs: "70vw", sm: "40vw" },
  },
  box4: {
    paddingY: { xs: "1rem", sm: "5rem" },
    height: { xs: "50vh", sm: "100%" },
    justifyContent: { xs: "flex-start", sm: "flex-end" },
  },
  box5: {
    justifyContent: { sm: "space-between" },
    width: { sm: "80%" },
  },
  box6: {
    display: { sm: "flex" },
    justifyContent: { sm: "space-between" },
  },
  box7: {
    marginBottom: { xs: "25px" },
  },
  button: {
    // marginTop: { xs: "-30px" },
  },
};

function Details({ countryData, isDarkMode }) {
  let { abbrev } = useParams();
  // console.log("country data", countryData);

  // console.log("country props DETAILS page", countryData);

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
    // <Box
    //   bgcolor="test.main"
    //   sx={{
    //     height: "120vh",
    //     marginTop: "0",
    //     padding: "40px 0",
    //     // paddingBottom: "100px",
    //   }}
    // >
    <Box sx={{ ...style.box1 }}>
      <Button
        // id="details--button"
        id={`details--button-${displayColor}`}
        variant="outlined"
        color="primary"
        sx={{
          ...style.button,
          borderRadius: "6px",
          boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.293139)",
          marginBottom: "50px",
        }}
      >
        <Link
          color="secondary"
          to="/"
          // className="details--back-button"
          className={`details--back-button-${displayColor}`}
        >
          <KeyboardBackspaceIcon sx={{ marginRight: "6px" }} /> Back
        </Link>
      </Button>

      <Box
        sx={{
          ...style.box2,
          columnGap: "2rem",
          // backgroundColor: "black",
          display: "flex",
          // flexDirection: "column",
        }}
      >
        <Box
          sx={{
            ...style.box3,
            width: "100%",
            height: "auto",
            // flexShrink: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: "2",
          }}
        >
          <img src={country.flag} className="details--flag" width="100%" />
        </Box>
        <Box
          sx={{
            ...style.box4,
            display: "flex",
            flexDirection: "row",
            // alignItems: "flex-start",
            width: "100%",
            // border: "2px dashed red",

            // border: "4px solid orange",
          }}
        >
          <Box
            sx={{
              ...style.box5,
              display: "flex",
              flexDirection: "column",
              // border: "3px dashed blue",
              // maxWidth: "600px",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                ...style.countryTitle,
                fontWeight: "800",
                marginY: "1rem",
              }}
            >
              {country.name}
            </Typography>
            <Box sx={{ ...style.box6 }}>
              <Box sx={{ ...style.box7 }}>
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
    // </Box>
  );
}

export default Details;
