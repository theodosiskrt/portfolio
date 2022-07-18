import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const Home = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.homeAlign}
      alignItems="center"
      justifyContent="center"
      container
    >
      <Grid item>
        <Typography className={classes.fullWidth} variant="h1">
          Theodosis Karataris
        </Typography>
        <Typography className={classes.fullWidth} variant="h3">
          Front-End Developer
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
