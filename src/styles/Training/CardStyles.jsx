import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Card } from "@mui/material";

export const CardStyled = styled(Card)(() => ({
  display: "flex",
  width: "100%",
  flexWrap: "wrap",

  "&:hover": {
    animation: `${scaleUp} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
  },
}));

const scaleUp = keyframes`
     0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
  }
`;
