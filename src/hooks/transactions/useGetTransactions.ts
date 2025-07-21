'use client';

import { useQuery } from '@tanstack/react-query';
import { Transaction } from '@/models/interfaces/transactions';
import { getTransactionsService } from '@/services/transactions';

const useGetTransactions = () => {
  const {
    data: transactions,
    error,
    isLoading,
  } = useQuery<Transaction[], Error>({
    queryKey: ['transactions'],
    queryFn: getTransactionsService,
  });

  return {
    transactions,
    error,
    isLoading,
  };
};

export default useGetTransactions;
