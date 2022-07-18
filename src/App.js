import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import { styles } from "./styles";
import { name, role, aboutTitle, aboutText } from "./textConstants";

const useStyles = makeStyles(styles);

const App = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Home header={name} subheader={role} pageIndex={0}></Home>
      <About header={aboutTitle} text={aboutText} pageIndex={1}></About>
    </Grid>
  );
};

export default App;
