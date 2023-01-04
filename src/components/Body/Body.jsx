import Grid from "@mui/material/Unstable_Grid2";

import { Technologies } from "./Technologies";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { Languages } from "./Languages";
import { Container } from "../../styles/GeneralComponents";

export const Body = () => {
  return (
    <Container container mt={"8rem"}>
      <Grid p={4} xs={6} sm={5} md={4}>
        <AboutMe />
      </Grid>
      <Grid p={4} xs={6} sm={5} md={4}>
        <Technologies />
        <Skills />
        <Languages />
      </Grid>
    </Container>
  );
};
