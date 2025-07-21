'use client';

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  useTheme,
} from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import type { Account } from '@models/interfaces/accounts';

interface AccountCardProps {
  account: Account;
}

// TODO break this
export function AccountCard({ account }: AccountCardProps) {
  const theme = useTheme();

  const Icon =
    account.type === 'current' ? AccountBalanceWalletIcon : AttachMoneyIcon;

  return (
    <Card
      sx={{
        transition: 'all 0.2s',
        border: 2,
        borderColor: theme.palette.divider,
        boxShadow: 1,
      }}
    >
      <CardHeader
        sx={{
          pb: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        title={
          <Typography variant="subtitle2" color="text.primary">
            {account.name}
          </Typography>
        }
        action={<Icon fontSize="small" color="action" />}
      />

      <CardContent>
        <Typography variant="h5" fontWeight={700}>
          ${account.balance.toFixed(2)}
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block">
          Account: {account.accountNumber}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ textTransform: 'capitalize' }}
        >
          {account.type} Account
        </Typography>
      </CardContent>
    </Card>
  );
}
