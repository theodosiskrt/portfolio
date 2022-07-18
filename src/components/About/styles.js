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

// .shinyText {
//   transform: translate(-50%, -50%);
//   padding: 12px 150px;
//   color: #ffffff;
//   font-size: 1.5em;
//   background: linear-gradient(to right, #727272 0, white 10%, #727272 20%);
//   background-position: 0;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   animation: shine 7s infinite linear;
//   animation-fill-mode: forwards;
//   -webkit-text-size-adjust: none;

//   text-decoration: none;
//   white-space: nowrap;
// }
