export const styles = () => ({
  container: {
    scrollSnapAlign: "start",
    height: "100vh",
    background: ({ pageIndex }) =>
      `linear-gradient(${
        pageIndex % 2 === 0 ? "0" : "180"
      }deg, rgba(75,0,130,1) 0%, rgba(128,128,128,1) 80%)`,
    color: "#ccc",
  },
  fullWidth: { width: "100%", textAlign: "center" },
});
