"use client";

import React from "react";
import { Box, CircularProgress } from "@mui/material";
import AuthForm from "./AuthForm";
import { AccessTypes } from "@/models/enums";
import ErrorContainer from "@/components/common/error/ErrorContainer";

interface AuthFormContainerProps {
  value: AccessTypes;
  tabIdPrefix: string;
  isLoading: boolean;
  error: Error | null;
  onSubmit: (form: { email: string; password: string }) => void;
}

const AuthFormContainer = ({
  value,
  tabIdPrefix,
  isLoading,
  error,
  onSubmit,
}: AuthFormContainerProps) => {
  return (
    <Box
      role="tabpanel"
      id={`${tabIdPrefix}-panel-${value}`}
      aria-labelledby={`${tabIdPrefix}-${value}`}
      hidden={false}
      sx={{
        p: 2,
        minHeight: 450,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="200px"
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <AuthForm mode={value} onSubmit={onSubmit} isLoading={isLoading} />
          <ErrorContainer error={error} />
        </>
      )}
    </Box>
  );
};

export default AuthFormContainer;
