import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

export const Container = styled(Grid)(() => ({
  marginTop: "12vw",
  justifyContent: "center",
}));

export const TextPrimary = styled(Typography)(() => ({
  fontFamily: "Kanit",
  fontSize: "3.5vw",
}));

export const TextSecondary = styled(Typography)(() => ({
  fontFamily: "Kanit",
  fontSize: "1.8vw",
  color: "grey",
}));

export const TextParagraph = styled(Typography)(() => ({
  fontFamily: "Kanit",
  fontSize: "1.3vw",
}));
