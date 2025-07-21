"use client";
import type React from "react";
import { Box } from "@mui/material";

export function SidebarContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        bgcolor: "primary.main",
        color: "secondary.main",
        height: "100%",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {children}
    </Box>
  );
}
