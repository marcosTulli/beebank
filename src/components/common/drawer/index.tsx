"use client";

import { styled } from "@mui/material/styles";
import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";

interface CustomDrawerProps extends Omit<MuiDrawerProps, "open"> {
  open: boolean;
  topBarHeight: number;
  drawerWidth: number;
  collapsedDrawerWidth: number;
}

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) =>
    prop !== "open" &&
    prop !== "topBarHeight" &&
    prop !== "drawerWidth" &&
    prop !== "collapsedDrawerWidth",
})<CustomDrawerProps>(
  ({ theme, open, topBarHeight, drawerWidth, collapsedDrawerWidth }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    position: "fixed",
    top: topBarHeight,
    height: `calc(100vh - ${topBarHeight}px)`,
    overflowY: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar": { display: "none" },
    msOverflowStyle: "none",
    scrollbarWidth: "none",

    // Desktop styles
    [theme.breakpoints.up("sm")]: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      width: open ? drawerWidth : collapsedDrawerWidth,
    },

    // Mobile styles
    [theme.breakpoints.down(500)]: {
      zIndex: 1300,
      width: "100vw",
      transform: open ? "translateX(0)" : "translateX(-100%)",
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: "hidden",
    },

    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      boxSizing: "border-box",

      [theme.breakpoints.up("sm")]: {
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        width: open ? drawerWidth : collapsedDrawerWidth,
      },

      [theme.breakpoints.down(500)]: {
        width: "100vw",
        transform: open ? "translateX(0)" : "translateX(-100%)",
        transition: theme.transitions.create("transform", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: "hidden",
      },
    },
  })
);
