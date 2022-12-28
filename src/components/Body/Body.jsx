import Grid from "@mui/material/Unstable_Grid2";

import { Divider } from "@mui/material";
import { Container, TextPrimary } from "../GeneralComponents";
import { Technologies } from "./Technologies";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";

export const Body = () => {
  return (
    <Container container mt={"8rem"}>
      <AboutMe />
      <Grid p={4} xs={6} lg={4}>
        <Technologies />
        <Skills />

        <TextPrimary mb={2} variant="h2" color="initial">
          Idiomas
        </TextPrimary>
        <Divider />
        <Grid>Aqui los idiomas</Grid>
      </Grid>
    </Container>
  );
};
