import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import { styles } from "./styles";
import { name, role, aboutTitle } from "./textConstants";

const useStyles = makeStyles(styles);

const App = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Home header={name} subheader={role} />
      <About header={aboutTitle} />
    </Grid>
  );
};

export default App;
