import { CardMedia } from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { TextPrimary } from "../GeneralComponents";

export const TitleProjects = styled(TextPrimary)(({ focusprojects }) => ({
  animation:
    focusprojects === "true" &&
    `${focusInContract} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
}));

export const CardProject = styled(CardMedia)(() => ({
  width: "100%",

  opacity: 0.5,
  "&:hover": {
    animation: `${fadeIn} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
  },
}));

const fadeIn = keyframes`
 0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const focusInContract = keyframes`
    0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
            transform: translateZ(300px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
            transform: translateZ(12px);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
`;
