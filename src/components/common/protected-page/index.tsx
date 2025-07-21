"use client";

import { useUser } from "@hooks/auth";
import { Routes } from "@models/enums";
import { Box, CircularProgress } from "@mui/material";
import React from "react";

type ProtectedPageProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export function ProtectedPage({
  children,
  redirectTo = Routes.auth,
}: ProtectedPageProps) {
  const { isAuthenticated, isReady } = useUser({ redirectTo });

  if (!isReady) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={48} />
      </Box>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <Box padding={2}>{children}</Box>;
}
