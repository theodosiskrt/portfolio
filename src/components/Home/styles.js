import BgImage from "../../images/Home2.jpg";

export const styles = {
  container: {
    scrollSnapAlign: "start",
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#fff",

    backgroundPosition: "top",
    height: "100vh",
    "@media only screen and (min-width: 1000px)": {
      backgroundPosition: "bottom",
    },
  },
  fullWidth: { width: "100%", textAlign: "center" },
  header: { fontSize: { xs: "2em", sm: "3em", md: "3.8em", lg: "5em" } },
  subheader: { fontSize: { xs: "1.5em", sm: "2.5em", md: "3.2em", lg: "4em" } },
  innerContainer: {
    padding: "2em 0",
    backgroundColor: "rgba(150,150,150,0.1)",
    backdropFilter: "blur(5px)",
  },
};
