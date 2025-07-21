"use client";

import type React from "react";
import List from "@mui/material/List";
import { useSidebar } from "@/hooks/ui";
import { Drawer } from "../drawer";
import { navigationItems } from "./config/navigation";
import { NavigationItem } from "./NavigationItem";
import { SidebarContainer } from "./SidebarContainer";
import { layoutConfig } from "@components/common/app-layout/config/layoutConfig";

export function Sidebar() {
  const { isSideBarOpen } = useSidebar();
  const { topBarHeight, collapsedDrawerWidth, drawerWidth } = layoutConfig;

  return (
    <Drawer
      collapsedDrawerWidth={collapsedDrawerWidth}
      drawerWidth={drawerWidth}
      topBarHeight={topBarHeight}
      variant="permanent"
      open={isSideBarOpen}
    >
      <SidebarContainer>
        <List sx={{ width: "100%" }}>
          {navigationItems.map((item) => (
            <NavigationItem
              href={item.href}
              icon={item.icon}
              isOpen={isSideBarOpen}
              text={item.text}
              key={item.text}
            />
          ))}
        </List>
      </SidebarContainer>
    </Drawer>
  );
}
