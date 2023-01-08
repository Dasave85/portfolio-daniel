import Grid from "@mui/material/Unstable_Grid2";
import { TextParagraph } from "../../styles/GeneralComponents/GeneralComponents";

export const Footer = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      sx={{ backgroundColor: "#f1f1f1", p: 1, mt: 4 }}
    >
      <Grid textAlign="center">
        <TextParagraph>+34 653521264</TextParagraph>

        <TextParagraph>dasave85@gmail.com</TextParagraph>
        <TextParagraph>©2023 Daniel Sánchez Vela</TextParagraph>
      </Grid>
    </Grid>
  );
};
