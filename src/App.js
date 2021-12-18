import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Page from "./components/Page/Page";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const App = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Page
        header="Theodosis Karataris"
        subheader="Front End Developer"
        pageIndex={0}
      ></Page>
      <Page
        header="Theodosis Karataris"
        subheader="Front End Developer"
        pageIndex={1}
      ></Page>
    </Grid>
  );
};

export default App;
