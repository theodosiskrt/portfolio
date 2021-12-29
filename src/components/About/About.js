import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { styles } from "./styles";

const useStyles = makeStyles(styles);

const About = ({ header, text }) => {
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
        <Grid item xs={7}>
          <Typography
            className={`${classes.fullWidth} ${classes.underline}`}
            variant="h1"
          >
            {header}
          </Typography>
        </Grid>

        <Grid items xs={6}>
          <Typography className={classes.fullWidth} variant="h6">
            Hi! I am a 19-year-old passionate software developer from Greece who
            is interested in <br />
            <span className="shinyText">Front End Development</span>
            <br /> as well as <br />
            <span className="shinyText">Mobile and Desktop Design.</span>
            <br /> I am constantly looking for the next brain-stimulating
            project. Always excited to work with new frameworks and tools.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
