"use client";

import { useMemo } from 'react';
import {  parseISO } from 'date-fns';
import { Transaction } from '@/models/interfaces/transactions';
import { useTransactionFilterStore } from './transactionFilterStore';
import { useTransactionSortStore } from './transactionSortStore';
import useGetTransactions from '@/hooks/transactions/useGetTransactions';

export const useTransactions = () => {
    const {transactions} = useGetTransactions()
  const { searchTerm, dateRange, amountRange } = useTransactionFilterStore();
  const { sortConfig } = useTransactionSortStore();

  const processedTransactions = useMemo(() => {
    let filtered = transactions?.filter((transaction) => {
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
      filtered?.sort((a, b) => {
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
  
  return {processedTransactions};
};