'use client';

import { Grid, Typography, Box } from '@mui/material';
import { AccountCard } from './AccountCard';
import { Account } from '@/models/interfaces/accounts';
import accountsData from './accounts.json';

export function AccountGrid() {
  // TODO Create endpoint and service for accounts
  const accounts: Account[] = accountsData.accounts;

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Your Accounts
      </Typography>
      <Grid container spacing={2}>
        {accounts.map((account) => (
          <Grid item xs={12} sm={6} md={4} key={account.id}>
            <AccountCard account={account} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
