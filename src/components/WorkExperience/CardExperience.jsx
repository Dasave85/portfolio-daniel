import { useState } from "react";
import { Avatar, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { ButtonPlus } from "../Training/ButtonPlus";
import { ButtonMinus } from "../Training/ButtonMinus";
import {
  TextParagraph,
  TextSecondary,
} from "../../styles/GeneralComponents/GeneralComponents";
import { CardStyled } from "../../styles/Training/CardStyles";

export const CardExperience = ({
  avatarLetter,
  bgColor,
  title,
  business,
  term,
  description,
}) => {
  const [open, setOpen] = useState(false);

  const changeStateButton = () => {
    setOpen(!open);
  };

  return (
    <CardStyled sx={{ m: 2 }}>
      <Grid
        xs={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            width: "10vw",
            height: "10vw",
            fontSize: "10vw",
            bgcolor: `${bgColor}`,
          }}
          variant="rounded"
        >
          {avatarLetter}
        </Avatar>
      </Grid>
      <Grid
        xs={8}
        sx={{
          display: "flex",
        }}
      >
        <CardContent>
          <Typography fontSize={"2.3vw"} variant="h5">
            {title}
          </Typography>
          <TextSecondary variant="body1">{business}</TextSecondary>
          <TextParagraph mb={1} color="grey" variant="body1">
            {term}
          </TextParagraph>
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
