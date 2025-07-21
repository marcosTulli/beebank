"use client";

import { useAuthHandler } from "@components/pages/auth/hooks/useAuthHandler";
import { Box, Tabs } from "@mui/material";
import React from "react";
import useAccessType from "./hooks/useAccessType";
import AccessTabs from "./components/AccessTabs";
import AuthFormContainer from "./components/AuthFormContainer";
import CardTitle from "./components/CardTitle";
import CardContainer from "@/components/common/card";
import { AccessTypes } from "@/models/enums";
import { tabs } from "./config/tabs";

const tabIdPrefix = "auth-tab";

const AuthPageComponent = () => {
  const { mode, setMode } = useAccessType();
  const { handleSubmit, isLoading, error } = useAuthHandler(mode);

  return (
    <CardContainer>
      <CardTitle mode={mode} tabIdPrefix={tabIdPrefix} />
      <Tabs
        value={mode}
        onChange={(_, newValue) => setMode(newValue as AccessTypes)}
        aria-label="Authentication form tabs"
        centered
      >
        <AccessTabs
          value={mode}
          onChange={(_, val) => setMode(val as AccessTypes)}
        />
      </Tabs>

      <Box mt={2} minHeight={350}>
        {tabs.map(({ value }) =>
          value === mode ? (
            <AuthFormContainer
              key={value}
              value={value}
              tabIdPrefix={tabIdPrefix}
              isLoading={isLoading}
              error={error}
              onSubmit={handleSubmit}
            />
          ) : null
        )}
      </Box>
    </CardContainer>
  );
};

export default AuthPageComponent;
