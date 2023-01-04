import Grid from "@mui/material/Unstable_Grid2";
import { Divider } from "@mui/material";

import Adaptation from "../../assets/iconSkills/adaptation.png";
import Team from "../../assets/iconSkills/team.png";
import Learning from "../../assets/iconSkills/book.png";
import Organized from "../../assets/iconSkills/task.png";
import { TextPrimary } from "../../styles/GeneralComponents";
import { IconSkills, TextIcon } from "../../styles/Body";

export const Skills = () => {
  return (
    <>
      <TextPrimary mb={0.5} mt={3} variant="h2" color="initial">
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
          <IconSkills>
            <img src={Adaptation} height="100%" alt="adaptation" />
          </IconSkills>
          <TextIcon mt={1}>Adaptación al cambio</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <IconSkills sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={Team} height="100%" alt="team" />
          </IconSkills>
          <TextIcon mt={1}>Trabajo en equipo</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <IconSkills sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={Learning} height="100%" alt="learning" />
          </IconSkills>
          <TextIcon mt={1}>Aprendizaje continuo</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <IconSkills sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={Organized} height="100%" alt="organized" />
          </IconSkills>
          <TextIcon mt={1}>Organizado</TextIcon>
        </Grid>
      </Grid>
    </>
  );
};
