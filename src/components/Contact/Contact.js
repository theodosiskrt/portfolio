import { Grid, IconButton, Typography } from "@mui/material";
import ActionButton from "../ActionButton/ActionButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import { styles } from "./styles";
import { sendEmailHref, sendEmailText } from "../../textConstants";

const Contact = ({ header }) => {
  return (
    <Grid
      container
      item
      sx={styles.container}
      direction="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Grid container item xs={2} alignItems="center" justifyContent="center">
        <Typography sx={styles.header} align="center" variant="h1">
          {header}
        </Typography>
      </Grid>
      <Grid container item xs={3} justifyContent="space-around">
        <a
          href="https://www.linkedin.com/in/theodosis-karataris-97b6b6212/"
          target="_blank"
        >
          <IconButton sx={styles.linkButton("#0e76a8")}>
            <LinkedInIcon sx={styles.icon} />
          </IconButton>
        </a>

        <a href="https://twitter.com/TKarataris" target="_blank">
          <IconButton sx={styles.linkButton("#1DA1F2")}>
            <TwitterIcon sx={styles.icon} />
          </IconButton>
        </a>
        <a href="https://github.com/theodosiskrt" target="_blank">
          <IconButton sx={styles.linkButton("#000")}>
            <GitHubIcon sx={styles.icon} />
          </IconButton>
        </a>
      </Grid>
      <Grid container item xs={2} alignItems="center" justifyContent="center">
        <ActionButton
          customStyles={styles.button}
          text={sendEmailText}
          href={sendEmailHref}
        />
      </Grid>
    </Grid>
  );
};

export default Contact;
