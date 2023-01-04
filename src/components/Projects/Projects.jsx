import Grid from "@mui/material/Unstable_Grid2";
import { projects } from "../../model/projects/projects";

import { Container, TextPrimary } from "../../styles/GeneralComponents";

import { Project } from "./Project";

export const Projects = () => {
  return (
    <>
      <Container container>
        <Grid textAlign="center" mb={1} xs={12}>
          <TextPrimary>Proyectos</TextPrimary>
        </Grid>

        {projects.map((props) => {
          return <Project {...props} />;
        })}
      </Container>
    </>
  );
};
