import Grid from "@mui/material/Unstable_Grid2";
import { certificates } from "../../model/certificates/certificates";

import { Container, TextPrimary } from "../../styles/GeneralComponents";
import { CardCertificate } from "./CardCertificate";

export const Training = () => {
  return (
    <>
      <Container container>
        <Grid textAlign="center" mb={1} xs={12}>
          <TextPrimary>Formación y Certificaciones</TextPrimary>
        </Grid>

        <Grid
          container
          xs={8}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          {certificates.map((props) => {
            return <CardCertificate key={props.title} {...props} />;
          })}
        </Grid>
      </Container>
    </>
  );
};
