import { Grid, List, ListItem, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { skills } from "../../textConstants";

import { styles } from "./styles";

const Background = ({ header, secondaryText, listTitle }) => {
  return (
    <Grid
      item
      container
      sx={styles.container}
      direction="column"
      alignItems="center"
    >
      <Grid item xs={3} mt={{ xs: 7, sm: 15 }}>
        <Typography sx={styles.header} variant="h1" align="center">
          {header}
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs="auto"
        spacing={{ xs: 1, sm: 2 }}
        justifyContent="center"
      >
        <Grid
          container
          item
          xs={7}
          md={6}
          xl={5}
          sx={styles.section("Right")}
          alignItems={{ xs: "center", xl: "start" }}
        >
          <Typography variant="h6" align="center" sx={styles.sectionText}>
            {secondaryText}
          </Typography>
        </Grid>

        <Grid item xs={3} md={2} xl={1} sx={styles.section("Left")}>
          <Typography variant="h4" sx={styles.skillsTitle}>
            {listTitle}
          </Typography>
          <List>
            {skills.map((skill) => (
              <ListItem key={skill} disablePadding>
                <FiberManualRecordIcon sx={styles.listIcon} />
                <Typography variant="body2" sx={styles.listItemText}>
                  {skill}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Background;
