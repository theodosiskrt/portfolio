import { Button } from "@mui/material";
import { staticStyles } from "./styles";

const ActionButton = ({ customStyles, href, text }) => {
  return (
    <a href={href} download style={{ textDecoration: "none" }} target="_blank">
      <Button
        variant="contained"
        size="large"
        sx={{ ...customStyles, ...staticStyles }}
      >
        {text}
      </Button>
    </a>
  );
};

export default ActionButton;
