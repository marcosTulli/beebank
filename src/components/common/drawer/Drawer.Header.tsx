"use client";

import { styled } from "@mui/material/styles";

interface DrawerHeaderProps {
  topBarHeight: number;
}

export const DrawerHeader = styled("div")<DrawerHeaderProps>(
  ({ theme, topBarHeight }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    minHeight: topBarHeight,
  })
);
