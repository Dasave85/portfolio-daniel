import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const Container = styled(Grid)(() => ({
  marginTop: "8rem",
  justifyContent: "center",
}));

export const TextPrimary = styled(Typography)(() => ({
  fontFamily: "Kanit",
  fontSize: "3.5vw",
}));

export const TextSecondary = styled(Typography)(() => ({
  fontFamily: "Kanit",
  fontSize: "1.8vw",
  paddingLeft: "2px",
}));

export const TextIcon = styled(Typography)(() => ({
  fontFamily: "Kanit",
  fontSize: "1vw",
}));
