import type React from 'react';
import { CssBaseline } from '@mui/material';
import '../app/globals.css';
import { Providers } from '@components/providers';
import { AppLayout } from '@/components/common/app-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BeeBank',
  description: 'Account dashboard',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CssBaseline />
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
