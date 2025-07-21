import { Typography, Box } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Box sx={{ p: 3, bgcolor: "background.default", color: "secondary.main" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "secondary.main" }}>
        404 - Page not found
      </Typography>
    </Box>
  );
}
