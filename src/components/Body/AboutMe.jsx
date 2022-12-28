import Grid from "@mui/material/Unstable_Grid2";
import { TextPrimary, TextSecondary } from "../GeneralComponents";

export const AboutMe = () => {
  return (
    <Grid p={4} xs={6} lg={4}>
      <TextPrimary mb={2.5} variant="h2" color="initial">
        Sobre mi.
      </TextPrimary>
      <TextSecondary mb={1.5} variant="h5" color="grey">
        Soy un desarrollador web que he contribuido desde el FRONT END en
        pequeñas colaboraciones como Mr. Cooper y la propia academia donde
        realicé mi formación.
      </TextSecondary>
      <TextSecondary mb={1.5} variant="h5" color="grey">
        Desde siempre me han apasionado las nuevas tecnologías, pero hace poco
        decidí dar un nuevo rumbo a mi vida realizando lo que realmente me gusta
        y me apasiona.
      </TextSecondary>
      <TextSecondary variant="h5" color="grey">
        También motivado por ganar calidad de vida, ya que tengo un grado de
        discapacidad física de un 38% la cual no me impide realizar las tareas
        de este sector.
      </TextSecondary>
    </Grid>
  );
};
