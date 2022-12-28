import Grid from "@mui/material/Unstable_Grid2";
import { Divider, Rating } from "@mui/material";
import { TextPrimary, TextSecondary } from "../GeneralComponents";

export const Languages = () => {
  return (
    <>
      <TextPrimary mb={0.5} mt={3} variant="h2" color="initial">
        Idiomas
      </TextPrimary>
      <Divider />
      <Grid container alignItems="center" my={2}>
        <TextSecondary flexGrow={1} component="legend">
          Castellano
        </TextSecondary>
        <Rating sx={{ fontSize: "3vw" }} name="spanish" value={5} readOnly />
      </Grid>
      <Grid container alignItems="center" my={2}>
        <TextSecondary flexGrow={1} component="legend">
          Catalan
        </TextSecondary>
        <Rating sx={{ fontSize: "3vw" }} name="catalan" value={4} readOnly />
      </Grid>
      <Grid container alignItems="center" my={2}>
        <TextSecondary flexGrow={1} component="legend">
          Inglés
        </TextSecondary>
        <Rating sx={{ fontSize: "3vw" }} name="spanish" value={3} readOnly />
      </Grid>
    </>
  );
};
