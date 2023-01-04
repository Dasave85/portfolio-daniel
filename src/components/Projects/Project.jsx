import { CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import SwitchAccessShortcutIcon from "@mui/icons-material/SwitchAccessShortcut";

import { TextParagraph } from "../../styles/GeneralComponents/GeneralComponents";
import { CardStyled } from "../../styles/Training/CardStyles";

export const Project = ({ imgProject, title, description, link, gitLink }) => {
  return (
    <Grid container xs={6} md={4}>
      <CardStyled sx={{ m: 2 }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "100%" }}
            image={imgProject}
            alt={title}
          />
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
      </CardStyled>
    </Grid>
  );
};
