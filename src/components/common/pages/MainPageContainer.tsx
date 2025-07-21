"use client";

import type React from "react";
import { useAppTheme, useSidebar } from "@/hooks/ui";
import { Main } from "../main";
import { layoutConfig } from "@components/common/app-layout/config/layoutConfig";

export function MainPageContainer({ children }: { children: React.ReactNode }) {
  const { isSideBarOpen } = useSidebar();
  const { topBarHeight, collapsedDrawerWidth, drawerWidth } = layoutConfig;
  const { theme } = useAppTheme();

  return (
    <Main
      topBarHeight={topBarHeight}
      collapsedDrawerWidth={collapsedDrawerWidth}
      drawerWidth={drawerWidth}
      theme={theme}
      open={isSideBarOpen}
    >
      {children}
    </Main>
  );
}
