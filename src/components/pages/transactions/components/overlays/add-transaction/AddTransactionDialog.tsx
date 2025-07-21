import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { AddTransactionForm } from './AddTransactionForm';
import { useAddTransactionDialogStore } from '../../../hooks/useAddTransactionDialogStore';
import { Transaction } from '@/models/interfaces/transactions';

interface Props {
  onAddTransaction: (transaction: Transaction) => void;
}

export function AddTransactionDialogContainer({ onAddTransaction }: Props) {
  const store = useAddTransactionDialogStore();
  const handleClose = () => store.closeDialog();

  const handleSubmit = (data: Transaction) => {
    onAddTransaction(data);
    handleClose();
  };

  return (
    <Dialog open={store.isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add Transaction</DialogTitle>
      <DialogContent>
        <AddTransactionForm onSubmit={handleSubmit} onCancel={handleClose} />
      </DialogContent>
    </Dialog>
  );
}
