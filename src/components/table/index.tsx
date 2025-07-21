"use client";

import { Box, Paper, Table, TableContainer } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Transaction } from "@models/interfaces/transactions";
import { TransactionTableFilters } from "../pages/transactions/components/table/TransactionTableFilters";
import { TransactionTableHead } from "../pages/transactions/components/table/TableHead";
import { TransactionsTableBody } from "../pages/transactions/components/table/TableBody";

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TransactionTableFilters />

        <TableContainer
          component={Paper}
          sx={{
            bgcolor: "background.paper",
          }}
        >
          <Table>
            <TransactionTableHead />
            <TransactionsTableBody transactions={transactions} />
          </Table>
        </TableContainer>
      </Box>
    </LocalizationProvider>
  );
}
