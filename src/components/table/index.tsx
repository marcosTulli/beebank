"use client";

import {
  Box,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Typography,
  InputAdornment,
  useTheme,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ArrowDownward, ArrowUpward, Search } from "@mui/icons-material";
import { useState, useMemo } from "react";
import { format, parseISO } from "date-fns";
import { Transaction } from "@models/interfaces/transactions";

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  const theme = useTheme();

  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState<{
    from: Date | null;
    to: Date | null;
  }>({
    from: null,
    to: null,
  });
  const [amountRange, setAmountRange] = useState<{
    min?: number;
    max?: number;
  }>({});
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Transaction;
    direction: "asc" | "desc";
  } | null>(null);

  const filteredTransactions = useMemo(() => {
    const filtered = transactions.filter((transaction) => {
      const matchesSearch =
        transaction.senderReceiver
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.message.toLowerCase().includes(searchTerm.toLowerCase());

      const transactionDate = parseISO(transaction.date);
      const matchesDate =
        (!dateRange.from || transactionDate >= dateRange.from) &&
        (!dateRange.to || transactionDate <= dateRange.to);

      const matchesAmount =
        (!amountRange.min || transaction.amount >= amountRange.min) &&
        (!amountRange.max || transaction.amount <= amountRange.max);

      return matchesSearch && matchesDate && matchesAmount;
    });

    if (sortConfig) {
      filtered.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (typeof aVal === "string" && typeof bVal === "string") {
          return sortConfig.direction === "asc"
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
        }
        if (typeof aVal === "number" && typeof bVal === "number") {
          return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
        }
        return 0;
      });
    }

    return filtered;
  }, [transactions, searchTerm, dateRange, amountRange, sortConfig]);

  const requestSort = (key: keyof Transaction) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: keyof Transaction) => {
    if (!sortConfig || sortConfig.key !== key) return null;
    return sortConfig.direction === "asc" ? (
      <ArrowUpward fontSize="small" />
    ) : (
      <ArrowDownward fontSize="small" />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />

          <DatePicker
            label="From Date"
            value={dateRange.from}
            onChange={(newDate) =>
              setDateRange((prev) => ({ ...prev, from: newDate }))
            }
            slotProps={{ textField: { variant: "outlined" } }}
          />
          <DatePicker
            label="To Date"
            value={dateRange.to}
            onChange={(newDate) =>
              setDateRange((prev) => ({ ...prev, to: newDate }))
            }
            slotProps={{ textField: { variant: "outlined" } }}
          />

          <TextField
            type="number"
            label="Min Amount"
            value={amountRange.min ?? ""}
            onChange={(e) =>
              setAmountRange((prev) => ({
                ...prev,
                min: parseFloat(e.target.value) || undefined,
              }))
            }
          />

          <TextField
            type="number"
            label="Max Amount"
            value={amountRange.max ?? ""}
            onChange={(e) =>
              setAmountRange((prev) => ({
                ...prev,
                max: parseFloat(e.target.value) || undefined,
              }))
            }
          />
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            bgcolor: "background.paper",
          }}
        >
          <Table>
            <TableHead
              sx={{
                bgcolor: "action.hover", // or use a custom color for header background
              }}
            >
              <TableRow>
                <TableCell
                  onClick={() => requestSort("date")}
                  sx={{ cursor: "pointer", color: "text.primary" }}
                >
                  Date {getSortIcon("date")}
                </TableCell>
                <TableCell
                  onClick={() => requestSort("senderReceiver")}
                  sx={{ cursor: "pointer", color: "text.primary" }}
                >
                  Sender/Receiver {getSortIcon("senderReceiver")}
                </TableCell>
                <TableCell
                  onClick={() => requestSort("amount")}
                  sx={{
                    cursor: "pointer",
                    textAlign: "right",
                    color: "text.primary",
                  }}
                >
                  Amount {getSortIcon("amount")}
                </TableCell>
                <TableCell sx={{ color: "text.primary" }}>Message</TableCell>
              </TableRow>
            </TableHead>

            <TableBody
              sx={{
                bgcolor: "background.default",
              }}
            >
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((t) => (
                  <TableRow key={t.id} hover>
                    <TableCell sx={{ color: "text.primary" }}>
                      {format(parseISO(t.date), "MMM dd, yyyy")}
                    </TableCell>
                    <TableCell sx={{ color: "text.primary" }}>
                      {t.senderReceiver}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color: t.amount < 0 ? "error.main" : "success.main",
                      }}
                    >
                      {t.amount < 0 ? "-" : "+"}${Math.abs(t.amount).toFixed(2)}
                    </TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>
                      {t.message}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    align="center"
                    sx={{ color: "text.secondary" }}
                  >
                    <Typography variant="body2">
                      No transactions found.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </LocalizationProvider>
  );
}
