import { Button } from "@mui/material";

import CV from "../../CV/TheodosisKarataris.pdf";

const DownloadCV = ({ styles }) => {
  return (
    <a href={CV} download style={{ textDecoration: "none" }}>
      <Button variant="contained" size="large" sx={{ ...styles }}>
        Download CV
      </Button>
    </a>
  );
};

export default DownloadCV;
