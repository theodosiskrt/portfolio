import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { styles } from "./styles";

const useStyles = makeStyles(styles);

const About = ({ header }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container>
      <Grid item container justifyContent="center" xs={12}>
        <Typography
          sx={{ ...styles.fullWidth, ...styles.header }}
          className={`${classes.fullWidth} ${classes.header}`}
          variant="h1"
        >
          {header}
        </Typography>

        <Grid items xs={12} sm={10} md={8} lg={6}>
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
