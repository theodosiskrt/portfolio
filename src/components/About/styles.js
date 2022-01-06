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
    alignSelf: { xs: "start", sm: "end" },
    marginTop: { xs: "1em", md: "0em" },
  },
  height33percent: { height: "33%" },
  fullWidth: { width: "100%", textAlign: "center" },
  button: {
    padding: "1em 2em",
    alignSelf: { xs: "end", sm: "start" },
    marginBottom: { xs: "5em", sm: "0em" },
    background:
      "linear-gradient(36deg, rgba(89,0,154,1) 0%, rgba(178,0,185,1) 100%, rgba(253,179,255,1) 100%)",
    borderRadius: "2em",
  },
};
