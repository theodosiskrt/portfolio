import { useEffect, useState } from "react";
import { Grid, Typography, Collapse } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const Home = ({ header, subheader, text }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const classes = useStyles();

  return (
    <Grid className={classes.container} alignItems="center" container>
      <Grid
        item
        container
        justifyContent="center"
        xs={12}
        className={classes.innerContainer}
      >
        {header && (
          <Grid item xs={12}>
            <Collapse in={animate} timeout={2250}>
              <Typography
                sx={{ ...styles.header, ...styles.fullWidth }}
                variant="h1"
              >
                {header}
              </Typography>
            </Collapse>
          </Grid>
        )}

        {subheader && (
          <Grid item xs={12}>
            <Collapse in={animate} timeout={2250}>
              <Typography
                sx={{ ...styles.subheader, ...styles.fullWidth }}
                variant="h3"
              >
                {subheader}
              </Typography>
            </Collapse>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
