import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Background from "./components/Background/Background";
import Projects from "./components/Projects/Projects";
import BlankPage from "./components/BlankPage/BlankPage";
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
  contactTitle,
} from "./textConstants";
import Contact from "./components/Contact/Contact";

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
      <Contact header={contactTitle} />
      <BlankPage />
    </Grid>
  );
};

export default App;
