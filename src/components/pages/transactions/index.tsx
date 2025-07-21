"use client";

import { TransactionTable } from "@/components/table";
import useGetTransactions from "@/hooks/transactions/useGetTransactions";
import { Box, Typography } from "@mui/material";
import React from "react";

const TransactionsPageContent = () => {
  const { transactions } = useGetTransactions();
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: "secondary.main" }}>
        Transactions
      </Typography>
      <TransactionTable transactions={transactions || []} />
    </Box>
  );
};

export default TransactionsPageContent;
