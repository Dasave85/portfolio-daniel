import Grid from "@mui/material/Unstable_Grid2";

import { projects } from "../../model/projects/projects";

import { Container } from "../../styles/GeneralComponents";
import { TitleProjects } from "../../styles/Projects";

import { Project } from "./Project";

export const Projects = ({ textProjects, focusprojects }) => {
  return (
    <>
      <Container container>
        <Grid textAlign="center" mb={1} xs={12}>
          <TitleProjects
            focusprojects={focusprojects.toString()}
            ref={textProjects}
          >
            Proyectos
          </TitleProjects>
        </Grid>

        {projects.map((props) => {
          return <Project key={props.title} {...props} />;
        })}
      </Container>
    </>
  );
};
