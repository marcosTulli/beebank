import React from "react";
import { Box, Typography } from "@mui/material";

interface Error {
  message: string;
}

interface ErrorContainerProps {
  error: Error | null;
}

const ErrorContainer: React.FC<ErrorContainerProps> = ({ error }) => {
  return (
    <Box minHeight={40} mb={2}>
      {error && (
        <Typography
          color="error"
          role="alert"
          aria-live="assertive"
          variant="body2"
        >
          {error.message || "Authorization failed"}
        </Typography>
      )}
    </Box>
  );
};

export default ErrorContainer;
