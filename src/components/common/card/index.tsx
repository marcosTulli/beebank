"use client";

import React, { PropsWithChildren } from "react";
import { Box, Card, CardContent } from "@mui/material";

const CardContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      component="main"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="background.default"
      p={2}
    >
      <Card
        component="section"
        variant="outlined"
        role="region"
        aria-labelledby="access-card"
        sx={{
          width: { xs: "90%", sm: 400 },
          bgcolor: "background.paper",
          minHeight: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};

export default CardContainer;
