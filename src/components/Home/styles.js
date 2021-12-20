import BgImage from "../../images/Home2.jpg";

export const styles = () => ({
  container: {
    scrollSnapAlign: "start",
    height: "100vh",
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    maxWidth: `100%`,
    // background: ({ pageIndex }) =>
    //   `linear-gradient(${
    //     pageIndex % 2 === 0 ? "0" : "180"
    //   }deg, rgba(75,0,130,1) 0%, rgba(128,128,128,1) 80%)`,
    color: "#fff",
  },
  fullWidth: { width: "100%", textAlign: "center" },
  innerContainer: {
    padding: "2em 0",
    backgroundColor: "rgba(150,150,150,0.1)",
    backdropFilter: "blur(5px)",
  },
});
