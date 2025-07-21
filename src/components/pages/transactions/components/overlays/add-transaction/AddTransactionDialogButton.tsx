import Button from '@mui/material/Button';
import { useAddTransactionDialogStore } from '../../../hooks/useAddTransactionDialogStore';
import { convertLength } from '@mui/material/styles/cssUtils';

export function AddTransactionDialogButton() {
  const { openDialog } = useAddTransactionDialogStore();

  return (
    <Button
      sx={{ padding: 1, margin: '1rem' }}
      variant="outlined"
      color="secondary"
      onClick={openDialog}
    >
      Add Transaction
    </Button>
  );
}
