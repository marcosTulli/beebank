import { create } from 'zustand';

interface DateRange {
  from: Date | null;
  to: Date | null;
}

interface AmountRange {
  min?: number;
  max?: number;
}

interface TransactionFilterState {
  searchTerm: string;
  dateRange: DateRange;
  amountRange: AmountRange;
  setSearchTerm: (term: string) => void;
  setDateFrom: (from: Date | null) => void;
  setDateTo: (to: Date | null) => void;
  setAmountRange: (range: AmountRange) => void;
  resetFilters: () => void;
}

export const useTransactionFilterStore = create<TransactionFilterState>(
  (set) => ({
    searchTerm: '',
    dateRange: { from: null, to: null },
    amountRange: {},
    setSearchTerm: (term) => set({ searchTerm: term }),

    setDateFrom: (from) =>
      set((state) => ({
        dateRange: { ...state.dateRange, from },
      })),

    setDateTo: (to) =>
      set((state) => ({
        dateRange: { ...state.dateRange, to },
      })),

    setAmountRange: (range) => set({ amountRange: range }),

    resetFilters: () =>
      set({
        searchTerm: '',
        dateRange: { from: null, to: null },
        amountRange: {},
      }),
  }),
);
