import themeStore from "@store/ui/theme-store";
import { createTheme, type PaletteMode } from "@mui/material";
import { Themes } from "@/models/enums";

const createAppTheme = (mode: PaletteMode) => {
  const breakpoints = {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  };

  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: { main: "#1d2226", light: "#444444" },
            secondary: { main: "#F7F7F7", light: "#CCCCCC" },
            background: { default: "#1d2226", paper: "#2c2f33" },
            text: { primary: "#F7F7F7", secondary: "#CCCCCC" },
          }
        : {
            primary: { main: "#F7F7F7", light: "#CCCCCC" },
            secondary: { main: "#333333", light: "#444444" },
            background: { default: "#F7F7F7", paper: "#FFFFFF" },
            text: { primary: "#333333", secondary: "#808080" },
          }),
    },
    breakpoints,
  };
};

export const useAppTheme = () => {
  const store = themeStore();
  const mode: PaletteMode = store.selectedTheme === Themes.dark ? Themes.dark : Themes.light;
  const theme = createTheme(createAppTheme(mode));
  return { theme, toggleTheme: store.toggleTheme };
};
