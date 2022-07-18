import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  notSelProjectDesc,
  projectButtonText,
  projects,
} from "../../textConstants";
import ActionButton from "../ActionButton/ActionButton";

import { styles } from "./styles";

const Projects = ({ header }) => {
  const [selectedProject, setSelectedProject] = useState({});
  return (
    <Grid
      item
      container
      sx={styles.container}
      direction="column"
      alignItems="center"
    >
      <Grid item xs={3} mt={{ xs: 10, sm: 15 }}>
        <Typography sx={styles.header} variant="h1" align="center">
          {header}
        </Typography>
      </Grid>
      <Grid container item xs={4} justifyContent="center">
        <Grid item xs={3} md={2} xl={2} sx={styles.section("Right")}>
          <List>
            {projects.map((project) => (
              <ListItem key={project.name} sx={styles.responsivePadding}>
                <ListItemButton
                  onClick={() => setSelectedProject(project)}
                  sx={styles.projectButton(
                    selectedProject.name === project.name
                  )}
                >
                  <Typography variant="body2" sx={styles.listItemText}>
                    {project.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          container
          item
          xs={7}
          md={6}
          xl={4}
          sx={styles.section("Left")}
          direction="column"
        >
          {selectedProject.name ? (
            <>
              <Grid item xs="auto">
                <Typography variant="h4" align="center" sx={styles.descTitle}>
                  {selectedProject.name}
                </Typography>
                <Typography variant="h6" align="center" sx={styles.sectionText}>
                  {selectedProject.description}
                </Typography>
              </Grid>
              <Grid
                item
                xs
                container
                alignItems="center"
                justifyContent="center"
              >
                <ActionButton
                  text={projectButtonText}
                  customStyles={styles.button}
                  href={selectedProject.url}
                />
              </Grid>
            </>
          ) : (
            <Grid container item xs alignItems="center" justifyContent="center">
              <Typography variant="h6" align="center" sx={styles.sectionText}>
                {notSelProjectDesc}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
