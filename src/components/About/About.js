import { Grid, Typography } from "@mui/material";

import DownloadCV from "./DownloadCV";
import { styles } from "./styles";

const About = ({ header }) => {
  return (
    <Grid item container sx={styles.container} justifyContent="center" xs={12}>
      <Grid container item xs={12} sx={styles.height33percent}>
        <Typography sx={{ ...styles.fullWidth, ...styles.header }} variant="h1">
          {header}
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={10}
        md={8}
        lg={6}
        alignItems="center"
        sx={styles.height33percent}
      >
        <Typography sx={styles.fullWidth} variant="h6">
          Hi! I am a 19-year-old passionate software developer from Greece who
          is interested in <br />
          <span className="shinyText">Front End Development</span>
          <br /> as well as <br />
          <span className="shinyText">Mobile and Desktop Design.</span>
          <br /> I am constantly looking for the next brain-stimulating project.
          Always excited to work with new frameworks and tools.
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sx={styles.height33percent}
        justifyContent="center"
        alignItems="start"
      >
        <DownloadCV styles={styles.button} />
      </Grid>
    </Grid>
  );
};

export default About;
