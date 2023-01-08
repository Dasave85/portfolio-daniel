import Grid from "@mui/material/Unstable_Grid2";

import { experience } from "../../model/workExperience/experience";

import { Container, TextPrimary } from "../../styles/GeneralComponents";
import { CardExperience } from "./CardExperience";

export const WorkExperience = () => {
  return (
    <>
      <Container container>
        <Grid textAlign="center" mb={1} xs={12}>
          <TextPrimary>Experiencia Laboral</TextPrimary>
        </Grid>

        <Grid
          container
          xs={8}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          {experience.map((props) => {
            return <CardExperience key={props.title} {...props} />;
          })}
        </Grid>
      </Container>
    </>
  );
};
