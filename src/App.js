import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Background from "./components/Background/Background";
import Projects from "./components/Projects/Projects";
import { styles } from "./styles";
import {
  name,
  role,
  aboutTitle,
  backgroundTitle,
  backgroundText,
  getAboutText,
  skillsTitle,
  projectsTitle,
} from "./textConstants";

const useStyles = makeStyles(styles);

const App = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Home header={name} subheader={role} />
      <About header={aboutTitle} getSecondaryText={getAboutText} />
      <Background
        header={backgroundTitle}
        secondaryText={backgroundText}
        listTitle={skillsTitle}
      />
      <Projects header={projectsTitle} />
    </Grid>
  );
};

export default App;
