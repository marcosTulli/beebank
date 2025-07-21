"use client";
import type * as React from "react";
import { Box, Button, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Themes } from "@/models/enums";
import { useAppTheme } from "@/hooks/ui";
import themeStore from "@/store/ui/theme-store";

const ThemeIcon: React.FC = () => {
  const { selectedTheme } = themeStore();
  return selectedTheme === Themes.light ? <DarkModeIcon /> : <LightModeIcon />;
};

export const ThemePicker: React.FC = () => {
  const { toggleTheme } = useAppTheme();
  return (
    <Tooltip title={"Change theme"}>
      <Box sx={{ alignItems: "center", display: "flex" }}>
        <Button sx={{ margin: "0" }} onClick={toggleTheme} color={"secondary"}>
          <ThemeIcon />
        </Button>
      </Box>
    </Tooltip>
  );
};
