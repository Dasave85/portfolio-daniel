import { Button, Typography } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export const ButtonMinus = ({ changeStateButton }) => {
  return (
    <>
      <Button
        onClick={changeStateButton}
        sx={{ pl: 0, display: "flex", justifyContent: "start" }}
        variant="text"
        color="primary"
      >
        <RemoveCircleIcon sx={{ mr: "3px", fontSize: "1.8vw" }} />
        <Typography
          sx={{ fontSize: "1.8vw", fontFamily: "Kanit" }}
          color="primary"
        >
          VER MENOS
        </Typography>
      </Button>
    </>
  );
};
