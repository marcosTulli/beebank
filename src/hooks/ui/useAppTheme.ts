import themeStore from "@/store/ui/theme-store";
import { Themes } from "@models/enums";
import { createTheme } from "@mui/material";

export const useAppTheme = () => {
  const store = themeStore();
  const black = "#1d2226";

  const baseColors = {
    white: { main: "#F7F7F7" },
    black: { main: "#333333" },
    gray: { main: "#808080" },
  };

  const breakpoints = {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  };

  const dark = {
    palette: {
      ...baseColors,
      primary: { main: black, weak: "#444444" },
      secondary: { main: "#F7F7F7", strong: "#CCCCCC" },
      background: { default: black },
    },
    breakpoints,
  };

  const light = {
    palette: {
      ...baseColors,
      primary: { main: "#F7F7F7", weak: "#CCCCCC" },
      secondary: { main: "#333333", strong: "#444444" },
      background: { default: "#F7F7F7" },
    },
    breakpoints,
  };

  const themeObject = store.selectedTheme === Themes.dark ? dark : light;
  const theme = createTheme(themeObject);

  return { theme, toggleTheme: store.toggleTheme };
};
