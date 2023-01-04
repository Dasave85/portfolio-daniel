import { Button, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const ButtonPlus = ({ changeStateButton }) => {
  return (
    <>
      <Button
        onClick={changeStateButton}
        sx={{ pl: 0, display: "flex", justifyContent: "start" }}
        variant="text"
        color="primary"
      >
        <AddCircleIcon sx={{ mr: "3px", fontSize: "1.8vw" }} />
        <Typography
          sx={{ fontSize: "1.8vw", fontFamily: "Kanit" }}
          color="primary"
        >
          VER MAS
        </Typography>
      </Button>
    </>
  );
};
