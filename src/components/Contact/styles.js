import BgImage from "../../images/Contact.png";

export const styles = {
  container: {
    scrollSnapAlign: "start",
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BgImage})`,
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
  linkButton: (hoverColor) => ({
    color: "#fff",
    "&:hover": {
      color: hoverColor,
      background: "none",
    },
  }),
  icon: { fontSize: { xs: "5em", sm: "7.4em" } },
  button: {
    fontSize: { xs: "1.3em", sm: "1.5em" },
    padding: { xs: "1em 2em", sm: "1.5em 3em" },
    borderRadius: "3em",
  },
};
