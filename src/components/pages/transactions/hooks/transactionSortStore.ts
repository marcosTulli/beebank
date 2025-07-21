'use client';

import { create } from 'zustand';

interface Transaction {
  id: string;
  date: string;
  senderReceiver: string;
  amount: number;
  message: string;
}

interface SortConfig {
  key: keyof Transaction;
  direction: 'asc' | 'desc';
}

interface TransactionSortState {
  sortConfig: SortConfig | null;
  requestSort: (key: keyof Transaction) => void;
  resetSort: () => void;
}

export const useTransactionSortStore = create<TransactionSortState>(
  (set, get) => ({
    sortConfig: null,
    requestSort: (key) => {
      const currentSortConfig = get().sortConfig;
      let direction: 'asc' | 'desc' = 'asc';
      if (
        currentSortConfig &&
        currentSortConfig.key === key &&
        currentSortConfig.direction === 'asc'
      ) {
        direction = 'desc';
      }
      set({ sortConfig: { key, direction } });
    },
    resetSort: () => set({ sortConfig: null }),
  }),
);
