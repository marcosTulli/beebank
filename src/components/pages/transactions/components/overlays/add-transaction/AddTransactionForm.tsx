import React from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { useAddTransactionForm } from '../../../hooks/useAddTransaction';

interface Props {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export function AddTransactionForm({ onSubmit, onCancel }: Props) {
  const { values, errors, submitting, handleChange, handleSubmit } =
    useAddTransactionForm({ onSubmit, onCancel });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      noValidate
    >
      <Stack spacing={2} sx={{ minWidth: 320 }}>
        <TextField
          label="Date"
          type="date"
          value={values.date}
          onChange={handleChange('date')}
          error={Boolean(errors.date)}
          helperText={errors.date}
          InputLabelProps={{ shrink: true }}
          fullWidth
          required
        />
        <TextField
          label="Amount"
          type="number"
          value={values.amount}
          onChange={handleChange('amount')}
          error={Boolean(errors.amount)}
          helperText={errors.amount}
          fullWidth
          required
        />
        <TextField
          label="Sender / Receiver"
          value={values.senderReceiver}
          onChange={handleChange('senderReceiver')}
          error={Boolean(errors.senderReceiver)}
          helperText={errors.senderReceiver}
          fullWidth
          required
        />
        <TextField
          label="Message"
          value={values.message}
          onChange={handleChange('message')}
          error={Boolean(errors.message)}
          helperText={errors.message}
          fullWidth
          multiline
          rows={3}
        />
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button onClick={onCancel} disabled={submitting}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={submitting}>
            {submitting ? 'Saving...' : 'Save'}
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
