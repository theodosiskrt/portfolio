import BgImage from "../../images/About2.jpg";

export const styles = {
  container: {
    scrollSnapAlign: "start",
    background: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${BgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    height: "calc(var(--vh, 1vh) * 100)",
    color: "#f0f0f0",
  },
  header: {
    fontSize: { xs: "3.75em", sm: "5em" },
  },
  button: {
    padding: "1em 2em",
  },
};
