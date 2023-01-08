import Grid from "@mui/material/Unstable_Grid2";
import { Button, TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";

import {
  Container,
  TextPrimary,
} from "../../styles/GeneralComponents/GeneralComponents";
import { useContactForm } from "../../hooks";

export const Contact = ({ contactRef }) => {
  const { toSend, onSubmit, handleChange } = useContactForm();
  return (
    <>
      <Container container>
        <Grid xs={12}>
          <TextPrimary ref={contactRef} mb={4} textAlign="center">
            Contacta conmigo!
          </TextPrimary>
        </Grid>
        <form onSubmit={onSubmit}>
          <Grid display="flex" justifyContent="center">
            <Grid xs={12} sm={8} md={6} lg={5}>
              <TextField
                sx={{ mb: 1 }}
                fullWidth
                type="text"
                name="user"
                label="Nombre"
                value={toSend.user}
                onChange={handleChange}
              />

              <TextField
                sx={{ mb: 1 }}
                fullWidth
                type="email"
                name="email"
                label="Email"
                value={toSend.email}
                onChange={handleChange}
              />

              <TextField
                sx={{ mb: 2 }}
                fullWidth
                type="tel"
                name="phone"
                label="Telefono"
                value={toSend.phone}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid>
            <Textarea
              sx={{ mb: 1 }}
              minRows={5}
              name="message"
              value={toSend.message}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>

          <Grid display="flex" justifyContent="center" xs={12}>
            <Button type="submit" variant="contained" size="large">
              Enviar
            </Button>
          </Grid>
        </form>
      </Container>
    </>
  );
};
