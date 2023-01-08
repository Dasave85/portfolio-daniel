import { Card, CardContent, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import SwitchAccessShortcutIcon from "@mui/icons-material/SwitchAccessShortcut";

import { TextParagraph } from "../../styles/GeneralComponents/GeneralComponents";
import { CardProject } from "../../styles/Projects";

export const Project = ({ imgProject, title, description, link, gitLink }) => {
  return (
    <Grid container xs={6} md={4}>
      <Card sx={{ m: 2, display: "flex", flexDirection: "column" }}>
        <Grid
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <CardProject component="img" image={imgProject} alt={title} />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography fontSize={"2.3vw"} variant="h5">
              {title}
            </Typography>
            <TextParagraph my={1} variant="body1">
              {description}
            </TextParagraph>
            <Grid mt={2} display="flex" justifyContent="center">
              <IconButton href={link} target="_blank">
                <SwitchAccessShortcutIcon
                  sx={{ fontSize: "2.5vw" }}
                  color="info"
                />
              </IconButton>
              <IconButton href={gitLink} target="_blank">
                <GitHubIcon sx={{ fontSize: "2.5vw" }} color="info" />
              </IconButton>
            </Grid>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
};
