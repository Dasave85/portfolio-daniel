import styled from "@emotion/styled";

import { Avatar } from "@mui/material";
import { Container } from "../GeneralComponents";

export const HeaderContainer = styled(Container)(() => ({
  alignItems: "center",
}));

export const Photo = styled(Avatar)(() => ({
  width: "22vw",
  height: "22vw",
}));
