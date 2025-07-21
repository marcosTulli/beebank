import { create } from 'zustand';

interface AddTransactionDialogState {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

export const useAddTransactionDialogStore = create<AddTransactionDialogState>(
  (set) => ({
    isOpen: false,
    openDialog: () => set({ isOpen: true }),
    closeDialog: () => set({ isOpen: false }),
  }),
);
