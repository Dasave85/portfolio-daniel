import Grid from "@mui/material/Unstable_Grid2";
import { Divider, Icon } from "@mui/material";
import { TextIcon, TextPrimary } from "../GeneralComponents";
import Adaptation from "../../assets/iconSkills/adaptation.png";
import Team from "../../assets/iconSkills/team.png";
import Learning from "../../assets/iconSkills/book.png";
import Organized from "../../assets/iconSkills/task.png";

export const Skills = () => {
  return (
    <>
      <TextPrimary mb={2} mt={3} variant="h2" color="initial">
        Habilidades
      </TextPrimary>
      <Divider />
      <Grid
        container
        mt={1}
        spacing={{ xs: 2, md: 4 }}
        justifyContent="space-evenly"
      >
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <Icon sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={Adaptation} height="100%" alt="adaptation" />
          </Icon>
          <TextIcon mt={1}>Adaptación al cambio</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <Icon sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={Team} height="100%" alt="team" />
          </Icon>
          <TextIcon mt={1}>Trabajo en equipo</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <Icon sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={Learning} height="100%" alt="learning" />
          </Icon>
          <TextIcon mt={1}>Aprendizaje continuo</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <Icon sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={Organized} height="100%" alt="organized" />
          </Icon>
          <TextIcon mt={1}>Organizado</TextIcon>
        </Grid>
      </Grid>
    </>
  );
};
