import React from "react";
import HomeIcon from "@mui/icons-material/Home";

export interface NavigationItem {
  text: string;
  icon: React.ReactNode;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { text: "Home", icon: <HomeIcon />, href: "/" },
];
