"use client";

import React from "react";
import { Box } from "@mui/material";
import { Navbar } from "@components/common/Navbar";
import { Sidebar } from "@components/common/sidebar";
import { MainPageContainer } from "@components/common/pages/MainPageContainer";
import { useUser } from "@hooks/auth";
import AuthLayout from "../auth-layout";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const useAppLayout = user?.isDefined;

  return useAppLayout ? (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Navbar />
      <Sidebar />
      <MainPageContainer>{children}</MainPageContainer>
    </Box>
  ) : (
    <AuthLayout>{children}</AuthLayout>
  );
}
