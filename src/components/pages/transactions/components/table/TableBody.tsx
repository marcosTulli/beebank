'use client';

import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { Transaction } from '@models/interfaces/transactions';

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionsTableBody({ transactions }: TransactionTableProps) {
  return (
    <TableBody
      sx={{
        bgcolor: 'background.default',
      }}
    >
      {transactions.length > 0 ? (
        transactions.map((t) => (
          <TableRow key={t.id} hover>
            <TableCell sx={{ color: 'text.primary' }}>
              {format(parseISO(t.date), 'MMM dd, yyyy')}
            </TableCell>
            <TableCell sx={{ color: 'text.primary' }}>
              {t.senderReceiver}
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: t.amount < 0 ? 'error.main' : 'success.main',
              }}
            >
              {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toFixed(2)}
            </TableCell>
            <TableCell sx={{ color: 'text.secondary' }}>{t.message}</TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell
            colSpan={4}
            align="center"
            sx={{ color: 'text.secondary' }}
          >
            <Typography variant="body2">No transactions found.</Typography>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
