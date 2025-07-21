import { Transaction } from '@/models/interfaces/transactions';
import HttpClientInstance from '@/services/utils/httpClient';

const baseUrl = process.env.NEXT_PUBLIC_TRANSACTIONS_API || '';

export const getTransactionsService = () =>
  HttpClientInstance.get<Transaction[]>({
    url: baseUrl,
  });
