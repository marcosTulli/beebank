"use client";
import type React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ThemePicker } from "@components/common/theme-picker";
import { useSidebar } from "@/hooks/ui";
import { layoutConfig } from "@components/common/app-layout/config/layoutConfig";

export function Navbar() {
  const { toggleSideBar, isSideBarOpen } = useSidebar();
  const { topBarHeight } = layoutConfig;

  return (
    <MuiAppBar
      position="fixed"
      sx={{ width: "100%", height: topBarHeight, bgcolor: "primary.main" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          minHeight: topBarHeight,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="toggle sidebar"
          onClick={toggleSideBar}
          edge="start"
          sx={{ color: "secondary.main" }}
        >
          {isSideBarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <ThemePicker />
      </Toolbar>
    </MuiAppBar>
  );
}
