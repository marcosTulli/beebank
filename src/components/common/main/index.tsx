"use client";
import { styled } from "@mui/material/styles";

interface MainProps {
  open: boolean;
  topBarHeight: number;
  drawerWidth: number;
  collapsedDrawerWidth: number;
}

export const Main = styled("main", {
  shouldForwardProp: (prop) =>
    prop !== "open" &&
    prop !== "topBarHeight" &&
    prop !== "drawerWidth" &&
    prop !== "collapsedDrawerWidth",
})<MainProps>(
  ({ theme, open, topBarHeight, drawerWidth, collapsedDrawerWidth }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: topBarHeight,
    overflowX: "hidden",
    width: "100%",
    position: "relative",

    [theme.breakpoints.up("sm")]: {
      marginLeft: open ? drawerWidth : collapsedDrawerWidth,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    [theme.breakpoints.down(500)]: {
      marginLeft: 0,
      width: "100%",
      pointerEvents: open ? "none" : "auto",
      filter: open ? "blur(2px)" : "none",
      overflowX: "hidden",
    },
  })
);
