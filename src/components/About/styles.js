import BgImage from "../../images/About2.jpg";

export const styles = {
  container: {
    scrollSnapAlign: "start",
    background: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${BgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    backgroundPosition: "center",
    height: "100vh",
    color: "#fff",
  },
  header: {
    fontSize: { xs: "3.75em", sm: "5em" },
    alignSelf: { xs: "start", md: "end" },
    marginTop: { xs: "1em", md: "" },
  },
  fullWidth: { width: "100%", textAlign: "center" },
};
