import AuthPageComponent from "@components/pages/auth";
import { Box, CircularProgress } from "@mui/material";
import { Suspense } from "react";

export default function AuthPage() {
  return (
    <Suspense
      fallback={
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
      }
    >
      <AuthPageComponent />
    </Suspense>
  );
}
