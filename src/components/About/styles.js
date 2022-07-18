import BgImage from "../../images/About2.jpg";

export const styles = () => ({
  container: {
    scrollSnapAlign: "start",
    height: "100vh",
    background: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${BgImage})`,
    // backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "red",

    maxWidth: `100%`,
    color: "#fff",
  },
  underline: { borderBottom: "3px solid white", borderWidth: "3px" },
  fullWidth: { width: "100%", textAlign: "center" },
});
