import { createContext, useState } from "react";

export const CountriesContext = createContext();

export const CountriesContextProvider = (props) => {
  const [countryData, setCountryData] = useState([]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function getBorderCountriesFullName(country) {
    if (country.borders) {
      const borderCountriesArray = country.borders;
      return countryData.filter((item) =>
        borderCountriesArray.includes(item.alpha3Code)
      );
    } else {
      return [];
    }
  }

  return (
    <CountriesContext.Provider
      value={{
        numberWithCommas,
        countryData,
        setCountryData,
        getBorderCountriesFullName,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};
