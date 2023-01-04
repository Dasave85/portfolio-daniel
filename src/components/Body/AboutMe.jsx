import { TextPrimary, TextSecondary } from "../../styles/GeneralComponents";

export const AboutMe = () => {
  return (
    <>
      <TextPrimary mb={2.5} variant="h2" color="initial">
        Sobre mí.
      </TextPrimary>
      <TextSecondary mb={1.5} variant="h5">
        Soy un desarrollador web que he contribuido desde el FRONT END en
        pequeñas colaboraciones como Mr. Cooper y la propia academia donde
        realicé mi formación.
      </TextSecondary>
      <TextSecondary mb={1.5} variant="h5">
        Desde siempre me han apasionado las nuevas tecnologías, pero hace poco
        decidí dar un nuevo rumbo a mi vida realizando lo que realmente me gusta
        y me apasiona.
      </TextSecondary>
      <TextSecondary variant="h5">
        También motivado por ganar calidad de vida, ya que tengo un grado de
        discapacidad física de un 38% la cual no me impide realizar las tareas
        de este sector.
      </TextSecondary>
    </>
  );
};
