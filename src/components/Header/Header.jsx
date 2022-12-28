import { Typography, IconButton, Tooltip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import imgDaniel from "../../assets/foto-curriculum.jpg";
import PlaceIcon from "@mui/icons-material/Place";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { HeaderContainer, Photo } from "./HeaderStyles";
import { TextPrimary, TextSecondary } from "../GeneralComponents";

export const Header = () => {
  return (
    <HeaderContainer container>
      <Grid sx={{ mr: "2vw" }}>
        <Photo alt="Daniel Sánchez" src={imgDaniel} />
      </Grid>
      <Grid>
        <TextPrimary variant="h2" color="initial">
          Daniel Sánchez Vela
        </TextPrimary>
        <TextSecondary variant="h2" color="grey">
          Desarrollador Front End
        </TextSecondary>
        <Grid container mt="2vw" alignItems="center">
          <PlaceIcon
            sx={{
              fontSize: "2.5vw",
            }}
            color="info"
          />
          <TextSecondary variant="h4" color="grey">
            Calafell, Tarragona
          </TextSecondary>
        </Grid>
        <Grid container mt="2vw">
          <IconButton href="https://github.com/Dasave85" target="_blank">
            <GitHubIcon sx={{ fontSize: "2.5vw" }} color="info" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/daniel-sanchez-vela/"
            target="_blank"
          >
            <LinkedInIcon sx={{ fontSize: "2.5vw" }} color="info" />
          </IconButton>
          <Tooltip title={<Typography>Proyectos</Typography>}>
            <IconButton onClick={() => {}}>
              <LaptopMacIcon sx={{ fontSize: "2.5vw" }} color="info" />
            </IconButton>
          </Tooltip>
          <Tooltip title={<Typography>+34 653521264</Typography>}>
            <IconButton>
              <ContactPhoneIcon sx={{ fontSize: "2.5vw" }} color="info" />
            </IconButton>
          </Tooltip>
          <Tooltip title={<Typography>dasave85@gmail.com</Typography>}>
            <IconButton>
              <AlternateEmailIcon sx={{ fontSize: "2.5vw" }} color="info" />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </HeaderContainer>
  );
};
