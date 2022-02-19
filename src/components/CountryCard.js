import { useNavigate } from "react-router";
import { useContext } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CountriesContext } from "../context/CountriesContext";
import styles from "../styles/styles";

function CountryCard({ name, region, flag, pop, capital, abbrev, mode }) {
  const { numberWithCommas } = useContext(CountriesContext);

  let navigate = useNavigate();

  let cardClassName = mode === "light" ? "card-light" : "card-dark";

  return (
    <Card
      sx={{ ...styles[4] }}
      onClick={() => navigate(`/details/${abbrev}`)}
      className="pointer"
    >
      <CardMedia
        component="img"
        height="160"
        image={flag}
        alt={`flag of ${name}`}
      />
      <CardContent className={cardClassName}>
        <Typography sx={{ ...styles[5] }} component="div">
          {name}
        </Typography>
        <Box sx={{ ...styles[6] }}>
          <p>
            <strong>Population:</strong> {numberWithCommas(pop)}
          </p>
          <p>
            <strong>Region:</strong> {region}
          </p>
          <p>
            <strong>Capital:</strong> {capital}
          </p>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CountryCard;
