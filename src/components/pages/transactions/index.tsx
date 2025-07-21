'use client';

import { TransactionTable } from '@/components/pages/transactions/components/table';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTransactions } from './hooks/useTransactions';
import { AddTransactionDialogButton } from './components/overlays/add-transaction/AddTransactionDialogButton';
import { AddTransactionDialogContainer } from './components/overlays/add-transaction/AddTransactionDialog';
import { Transaction } from '@/models/interfaces/transactions';

const TransactionsPageContent = () => {
  const { processedTransactions: transactions } = useTransactions();

  // TODO Add Post service
  const handlePost = (transaction: Transaction) => {
    const message = `Transaction with ammount $ ${transaction.amount} will be added soon...`;
    window.alert(message);
  };

  return (
    <Box>
      <Box
        display="flex"
        gap={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4" gutterBottom sx={{ color: 'secondary.main' }}>
          Transactions
        </Typography>
        <AddTransactionDialogButton />
      </Box>
      {/* TODO add skeleton!! */}
      <TransactionTable transactions={transactions || []} />
      <AddTransactionDialogContainer onAddTransaction={handlePost} />
    </Box>
  );
};

export default TransactionsPageContent;
