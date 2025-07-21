'use client';

import { TableCell, TableHead, TableRow } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Transaction } from '@models/interfaces/transactions';
import { useTransactionSortStore } from '../../hooks/transactionSortStore';

export function TransactionTableHead() {
  const { requestSort, sortConfig } = useTransactionSortStore();
  const getSortIcon = (key: keyof Transaction) => {
    if (!sortConfig || sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? (
      <ArrowUpward fontSize="small" />
    ) : (
      <ArrowDownward fontSize="small" />
    );
  };

  return (
    <TableHead
      sx={{
        bgcolor: 'action.hover',
      }}
    >
      <TableRow>
        <TableCell
          onClick={() => requestSort('date')}
          sx={{ cursor: 'pointer', color: 'text.primary' }}
        >
          Date {getSortIcon('date')}
        </TableCell>
        <TableCell
          onClick={() => requestSort('senderReceiver')}
          sx={{ cursor: 'pointer', color: 'text.primary' }}
        >
          Sender/Receiver {getSortIcon('senderReceiver')}
        </TableCell>
        <TableCell
          onClick={() => requestSort('amount')}
          sx={{
            cursor: 'pointer',
            textAlign: 'right',
            color: 'text.primary',
          }}
        >
          Amount {getSortIcon('amount')}
        </TableCell>
        <TableCell sx={{ color: 'text.primary' }}>Message</TableCell>
      </TableRow>
    </TableHead>
  );
}
