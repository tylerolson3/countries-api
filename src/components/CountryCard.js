import { useNavigate } from "react-router";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CountryCard({ name, region, flag, pop, capital, abbrev, mode }) {
  console.log("country card props for mode", mode);

  let navigate = useNavigate();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let cardClassName = mode === "light" ? "card-light" : "card-dark";

  return (
    // <div onClick={() => navigate(`/details/${abbrev}`)}>
    //   <img src={flag} width="80 px" />
    //   <h2>
    //     {name} is a country in {region}
    //   </h2>
    //   <p>population: {pop}</p>
    //   <p>region: {region}</p>
    //   <p>capital: {capital}</p>
    //   <hr />
    // </div>
    // <Grid item key={pop} xs={3}>
    <Card
      sx={{
        width: 264,
        height: 336,
        boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)",
        // marginRight: "15px",
        // backgroundColor: "green",
      }}
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
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "800",
            marginX: "12.5px",
            marginY: "11px",
          }}
          component="div"
        >
          {/* <Typography variant="p" component="div"> */}
          {/* <Typography sx={{fontSize: "18px"}} variant="h5" component="div"> */}
          {name}
        </Typography>
        <Box sx={{ marginX: "12.5px" }}>
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
    // </Grid>
  );
}

export default CountryCard;
