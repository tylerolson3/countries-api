import { createContext } from "react";

export const CountriesContext = createContext();

export const CountriesContextProvider = (props) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <CountriesContext.Provider value={{ numberWithCommas }}>
      {props.children}
    </CountriesContext.Provider>
  );
};
