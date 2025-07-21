import React from "react";
import { Typography } from "@mui/material";
import { AccessTypes } from "@/models/enums";

interface CardTitleProps {
  mode: AccessTypes;
  tabIdPrefix: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ mode, tabIdPrefix }) => {
  return (
    <Typography
      id={`${tabIdPrefix}-${mode}`}
      variant="h4"
      align="center"
      component="h1"
      sx={{ mb: 2 }}
    >
      {mode === AccessTypes.login ? "Login" : "Create Account"}
    </Typography>
  );
};

export default CardTitle;
