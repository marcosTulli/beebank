'use client';

import AccountPageContent from '@components/pages/accounts';
import { ProtectedPage } from '@components/common/protected-page';
import { Routes } from '@models/enums';

export default function HomePage() {
  return (
    <ProtectedPage redirectTo={Routes.auth}>
      <AccountPageContent />
    </ProtectedPage>
  );
}
