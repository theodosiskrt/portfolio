import BgImage from "../../images/Background.jpeg";

export const styles = {
  container: {
    scrollSnapAlign: "start",
    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BgImage})`,
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
  section: (noBorder) => {
    return {
      color: "#eee",
      border: "3px #bbb solid",
      borderRadius: "2em",
      [`borderTop${noBorder}Radius`]: "0",
      [`borderBottom${noBorder}Radius`]: "0",

      backgroundColor: "rgba(0,0,0, 0.65)",
    };
  },
  skillsTitle: { fontSize: { xs: "1.5em", sm: "2em" } },
  sectionText: {
    fontSize: { xs: "0.75em", sm: "1em" },
    padding: { xs: "0.5em 1em 0.5em 0.5em", lg: "1em" },
  },
  listIcon: {
    fontSize: { xs: "0.6em", sm: "0.8em" },
    marginRight: "0.5em",
  },
  listItemText: {
    fontSize: { xs: "0.75em", sm: "1em" },
  },
};
