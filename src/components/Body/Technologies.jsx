import Grid from "@mui/material/Unstable_Grid2";
import { Divider, Icon } from "@mui/material";
import { TextIcon, TextPrimary } from "../GeneralComponents";
import HtmlLogo from "../../assets/iconTechnologies/html-1.svg";
import CssLogo from "../../assets/iconTechnologies/css-3.svg";
import ReduxLogo from "../../assets/iconTechnologies/redux.svg";
import ReactLogo from "../../assets/iconTechnologies/react-2.svg";
import JavaScriptLogo from "../../assets/iconTechnologies/javascript-1.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import BootstrapLogo from "../../assets/iconTechnologies/bootstrap-5-1.svg";
import MaterialLogo from "../../assets/iconTechnologies/material-ui-1.svg";

export const Technologies = () => {
  return (
    <>
      <TextPrimary mb={2} variant="h2" color="initial">
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
          <Icon sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={HtmlLogo} height="100%" alt="html" />
          </Icon>
          <TextIcon>HTML</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <Icon sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={CssLogo} height="100%" alt="css" />
          </Icon>
          <TextIcon>CSS</TextIcon>
        </Grid>

        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <Icon sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={JavaScriptLogo} height="100%" alt="javascript" />
          </Icon>
          <TextIcon>JAVASCRIPT</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <Icon sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={ReactLogo} alt="react" />
          </Icon>
          <TextIcon>REACT</TextIcon>
        </Grid>
        <Grid display="flex" flexDirection="column" alignItems="center">
          <GitHubIcon sx={{ fontSize: "5vw" }} />
          <TextIcon>GITHUB</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <Icon sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={BootstrapLogo} alt="bootstrap" />
          </Icon>
          <TextIcon>BOOTSTRAP</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <Icon sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={MaterialLogo} alt="materialui" />
          </Icon>
          <TextIcon>MUI</TextIcon>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <Icon sx={{ fontSize: "4vw", my: "auto" }}>
            <img src={ReduxLogo} alt="redux" />
          </Icon>
          <TextIcon>REDUX</TextIcon>
        </Grid>
      </Grid>
    </>
  );
};
