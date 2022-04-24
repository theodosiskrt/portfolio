import BgImage from "../../images/Projects.jpg";

export const styles = {
  container: {
    scrollSnapAlign: "end",
    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
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
      padding: { xs: "0", sm: "1em" },
    };
  },
  sectionText: {
    fontSize: { xs: "0.75em", sm: "1em" },
    padding: { xs: "0.5em 1em 0.5em 0.5em", lg: "1em" },
  },
  responsivePadding: {
    padding: { xs: "0.8em 0em", lg: "0.8em" },
  },
  projectButton: (selected) => ({
    backgroundColor: `rgba(255,255,255, ${selected ? "0.2" : "0"})`,
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.3)",
    },
  }),
  descTitle: {
    fontSize: { xs: "1.5em", sm: "2em" },
    borderBottom: "2px solid #fff",
  },
  listItemText: {
    fontSize: { xs: "0.7em", sm: "0.7em", lg: "0.9em" },
  },
  button: {
    fontSize: "0.8em",
    padding: "0.7em 1.4em",
    marginBottom: { xs: "0.5em", sm: "0em" },
  },
};
