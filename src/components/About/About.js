import { Grid, Typography } from "@mui/material";
import ActionButton from "../ActionButton/ActionButton";
import CV from "../../CV/TheodosisKarataris.pdf";

import { styles } from "./styles";
import { downloadCVButtonText } from "../../textConstants";

const About = ({ header, getSecondaryText }) => (
  <Grid
    container
    item
    sx={styles.container}
    direction="column"
    alignItems="center"
    justifyContent="center"
  >
    <Grid item xs={2}>
      <Typography sx={styles.header} align="center" variant="h1">
        {header}
      </Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography align="center" variant="h6">
        {getSecondaryText()}
      </Typography>
    </Grid>
    <Grid container item xs={2} alignItems="center" justifyContent="center">
      <ActionButton
        customStyles={styles.button}
        text={downloadCVButtonText}
        href={CV}
      />
    </Grid>
  </Grid>
);

export default About;
