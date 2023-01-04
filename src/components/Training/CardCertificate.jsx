import { CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { useState } from "react";
import { ButtonPlus } from "./ButtonPlus";
import { ButtonMinus } from "./ButtonMinus";
import {
  TextParagraph,
  TextSecondary,
} from "../../styles/GeneralComponents/GeneralComponents";
import { CardStyled } from "../../styles/Training/CardStyles";

export const CardCertificate = ({
  imgCertificate,
  title,
  academy,
  description,
}) => {
  const [open, setOpen] = useState(false);

  const changeStateButton = () => {
    setOpen(!open);
  };

  return (
    <CardStyled sx={{ m: 2 }}>
      <Grid
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "27vw", pb: 1, pt: 2 }}
          image={imgCertificate}
          alt={title}
        />
      </Grid>
      <Grid
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "start" },
        }}
      >
        <CardContent>
          <Typography fontSize={"2.3vw"} variant="h5">
            {title}
          </Typography>
          <TextSecondary mb={1} variant="body1">
            {academy}
          </TextSecondary>
          {open ? (
            <>
              <TextParagraph variant="body1">{description}</TextParagraph>
              <ButtonMinus changeStateButton={changeStateButton} />
            </>
          ) : (
            <ButtonPlus changeStateButton={changeStateButton} />
          )}
        </CardContent>
      </Grid>
    </CardStyled>
  );
};
