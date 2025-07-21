"use client";

import { ProtectedPage } from "@/components/common/protected-page";
import { Routes } from "@/models/enums";
import { Typography, Box } from "@mui/material";

export default function HomePage() {
  return (
    <ProtectedPage redirectTo={Routes.auth}>
      <Box
        sx={{ p: 3, bgcolor: "background.default", color: "secondary.main" }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "secondary.main" }}>
          Welcome to Bee Bank app
        </Typography>
      </Box>
    </ProtectedPage>
  );
}
