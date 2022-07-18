import { useEffect, useState } from "react";
import { Grid, Typography, Collapse } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const Home = ({ header, subheader, text, pageIndex }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const classes = useStyles({ pageIndex });

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
          <Grid item xs={7}>
            <Collapse in={animate} timeout={2250}>
              <Typography className={classes.fullWidth} variant="h1">
                {header}
              </Typography>
            </Collapse>
          </Grid>
        )}

        {subheader && (
          <Grid item xs={7}>
            <Collapse in={animate} timeout={2250}>
              <Typography className={classes.fullWidth} variant="h3">
                {subheader}
              </Typography>
            </Collapse>
          </Grid>
        )}
        {text && (
          <Grid items xs={6}>
            <Typography className={classes.fullWidth} variant="h6">
              {text}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
