import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export interface NavigationItem {
  text: string;
  icon: React.ReactNode;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { text: "Home", icon: <HomeIcon />, href: "/" },
  { text: "Accounts", icon: <CreditCardIcon />, href: "/accounts" },
  { text: "Transaction", icon: <ReceiptIcon />, href: "/transactions" },
];
