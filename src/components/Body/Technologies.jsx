import Grid from "@mui/material/Unstable_Grid2";
import { Divider } from "@mui/material";
import { TextPrimary } from "../../styles/GeneralComponents";
import HtmlLogo from "../../assets/iconTechnologies/html-1.svg";
import CssLogo from "../../assets/iconTechnologies/css-3.svg";
import ReduxLogo from "../../assets/iconTechnologies/redux.svg";
import ReactLogo from "../../assets/iconTechnologies/react-2.svg";
import JavaScriptLogo from "../../assets/iconTechnologies/javascript-1.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import BootstrapLogo from "../../assets/iconTechnologies/bootstrap-5-1.svg";
import MaterialLogo from "../../assets/iconTechnologies/material-ui-1.svg";
import { IconTech, TextIcon } from "../../styles/Body";

export const Technologies = () => {
  return (
    <>
      <TextPrimary mb={0.5} variant="h2" color="initial">
        Tecnologías
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
          <IconTech>
            <img src={HtmlLogo} height="100%" alt="html" />
          </IconTech>
          <TextIcon>HTML</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <IconTech sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={CssLogo} height="100%" alt="css" />
          </IconTech>
          <TextIcon>CSS</TextIcon>
        </Grid>

        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <IconTech sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={JavaScriptLogo} height="100%" alt="javascript" />
          </IconTech>
          <TextIcon>JAVASCRIPT</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <IconTech sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={ReactLogo} alt="react" />
          </IconTech>
          <TextIcon>REACT</TextIcon>
        </Grid>
        <Grid display="flex" flexDirection="column" alignItems="center">
          <IconTech>
            <GitHubIcon sx={{ fontSize: "4vw" }} />
          </IconTech>
          <TextIcon>GITHUB</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <IconTech sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={BootstrapLogo} alt="bootstrap" />
          </IconTech>
          <TextIcon>BOOTSTRAP</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <IconTech sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={MaterialLogo} alt="materialui" />
          </IconTech>
          <TextIcon>MUI</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <IconTech sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={ReduxLogo} alt="redux" />
          </IconTech>
          <TextIcon>REDUX</TextIcon>
        </Grid>
      </Grid>
    </>
  );
};
