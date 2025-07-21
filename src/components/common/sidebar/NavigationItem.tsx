"use client";

import type React from "react";
import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppTheme, useSidebar } from "@hooks/ui";

interface SidebarItemProps {
  text: string;
  href: string;
  icon: React.ReactNode;
  isOpen: boolean;
}

export function NavigationItem({ text, href, icon, isOpen }: SidebarItemProps) {
  const { toggleSideBar, isSideBarOpen } = useSidebar();
  const { theme } = useAppTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(500));

  const handleClick = () => {
    if (isMobile) toggleSideBar();
  };

  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <Link href={href} passHref legacyBehavior>
        <ListItemButton
          onClick={handleClick}
          sx={{
            minHeight: 48,
            justifyContent: "initial",
            px: 2.5,
            color: "secondary.main",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: isOpen ? 3 : "auto",
              justifyContent: "center",
              color: "secondary.main",
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: isOpen ? 1 : 0 }} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
}
