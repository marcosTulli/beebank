"use client";

import React from "react";
import { Tabs, Tab } from "@mui/material";
import { tabs } from "../config/tabs";

interface AccessTabsProps {
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const AccessTabs: React.FC<AccessTabsProps> = ({ value, onChange }) => {
  return (
    <Tabs value={value} onChange={onChange} aria-label="Access Tabs" centered>
      {tabs.map(({ id, value, label, panelId }) => (
        <Tab
          key={id}
          id={id}
          value={value}
          label={label}
          aria-controls={panelId}
        />
      ))}
    </Tabs>
  );
};

export default AccessTabs;
