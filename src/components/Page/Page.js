import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const Page = ({ header, subheader, text, pageIndex }) => {
  const classes = useStyles({ pageIndex });

  return (
    <Grid
      className={classes.container}
      alignItems="center"
      justifyContent="center"
      container
    >
      <Grid item>
        <Typography className={classes.fullWidth} variant="h1">
          {header}
        </Typography>
        <Typography className={classes.fullWidth} variant="h3">
          {subheader}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Page;
