import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar } from "@mui/material";

export const HeaderContainer = styled(Grid)(() => ({
  marginTop: "8rem",
  justifyContent: "center",
  alignItems: "center",
}));

export const Photo = styled(Avatar)(() => ({
  width: "22vw",
  height: "22vw",
}));
