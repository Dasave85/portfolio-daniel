import Grid from "@mui/material/Unstable_Grid2";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Icon, Typography } from "@mui/material";

export const TextIcon = styled(Typography)(() => ({
  fontFamily: "Kanit",
  fontSize: "1vw",
}));

export const IconTech = styled(Icon)(() => ({
  fontSize: "4vw",
  my: "auto",
  "&:hover": {
    animation: `${jelloHorizontal} 0.9s both`,
  },
}));
export const IconSkills = styled(Icon)(() => ({
  fontSize: "4vw",
  my: "auto",
  "&:hover": {
    animation: `${scaleUp} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
  },
}));

export const IconLanguage = styled(Grid)(() => ({
  "&:hover": {
    animation: `${blink} 0.9s infinite both`,
  },
}));

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`;

const scaleUp = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.4);
            transform: scale(1.4);
  }
`;

const jelloHorizontal = keyframes`

     0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`;
