import {
  Avatar,
  Container,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import imgDaniel from "../../assets/foto-curriculum.jpg";
import PlaceIcon from "@mui/icons-material/Place";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export const Header = () => {
  return (
    <Container>
      <Grid container sx={style.container}>
        <Grid sx={{ mr: "2vw" }}>
          <Avatar sx={style.avatar} alt="Daniel Sánchez" src={imgDaniel} />
        </Grid>
        <Grid>
          <Typography sx={style.textPrincipal} variant="h2" color="initial">
            Daniel Sánchez Vela
          </Typography>
          <Typography sx={style.textSecondary} variant="h2" color="grey">
            Desarrollador Front End
          </Typography>
          <Grid container mt="2vw" alignItems="center">
            <PlaceIcon sx={style.icons} color="info" />
            <Typography sx={style.textSecondary} variant="h4" color="grey">
              Calafell, Tarragona
            </Typography>
          </Grid>
          <Grid container mt="2vw">
            <IconButton href="https://github.com/Dasave85" target="_blank">
              <GitHubIcon sx={style.icons} color="info" />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/daniel-sanchez-vela/"
              target="_blank"
            >
              <LinkedInIcon sx={style.icons} color="info" />
            </IconButton>
            <Tooltip
              title={
                <Typography fontSize={style.textSecondary}>
                  Proyectos
                </Typography>
              }
            >
              <IconButton onClick={() => {}}>
                <LaptopMacIcon sx={style.icons} color="info" />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={
                <Typography fontSize={style.textSecondary}>
                  +34 653521264
                </Typography>
              }
            >
              <IconButton>
                <ContactPhoneIcon sx={style.icons} color="info" />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={
                <Typography fontSize={style.textSecondary}>
                  dasave85@gmail.com
                </Typography>
              }
            >
              <IconButton>
                <AlternateEmailIcon sx={style.icons} color="info" />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const style = {
  container: {
    marginTop: "8rem",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: "22vw",
    height: "22vw",
  },
  textPrincipal: {
    fontSize: "3.5vw",
  },
  textSecondary: {
    fontSize: "1.8vw",
    paddingLeft: "2px",
  },
  icons: {
    fontSize: "2.5vw",
  },
};
