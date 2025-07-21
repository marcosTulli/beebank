'use client';

import { TransactionTable } from '@/components/pages/transactions/components/table';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTransactions } from './hooks/useTransactions';

const TransactionsPageContent = () => {
  const { processedTransactions: transactions } = useTransactions();
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: 'secondary.main' }}>
        Transactions
      </Typography>
      <TransactionTable transactions={transactions || []} />
    </Box>
  );
};

export default TransactionsPageContent;
