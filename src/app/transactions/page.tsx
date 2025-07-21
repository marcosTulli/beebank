'use client';

import TransactionsPageContent from '@components/pages/transactions';
import { ProtectedPage } from '@components/common/protected-page';
import { Routes } from '@models/enums';

export default function TransactionsPage() {
  return (
    <ProtectedPage redirectTo={Routes.auth}>
      <TransactionsPageContent />
    </ProtectedPage>
  );
}
