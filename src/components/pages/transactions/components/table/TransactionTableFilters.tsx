import { Box, TextField, InputAdornment } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Search } from '@mui/icons-material';
import { useTransactionFilterStore } from '../../hooks/useTransactionFilterStore';

export function TransactionTableFilters() {
  const {
    searchTerm,
    dateRange,
    amountRange,
    setSearchTerm,
    setDateFrom,
    setDateTo,
    setAmountRange,
  } = useTransactionFilterStore();

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <DatePicker
        label="From Date"
        value={dateRange.from}
        onChange={(newDate) => setDateFrom(newDate)}
        slotProps={{ textField: { variant: 'outlined' } }}
      />

      <DatePicker
        label="To Date"
        value={dateRange.to}
        onChange={(newDate) => setDateTo(newDate)}
        slotProps={{ textField: { variant: 'outlined' } }}
      />

      <TextField
        type="number"
        label="Min Amount"
        value={amountRange.min ?? ''}
        onChange={(e) =>
          setAmountRange({
            ...amountRange,
            min: parseFloat(e.target.value) || undefined,
          })
        }
      />

      <TextField
        type="number"
        label="Max Amount"
        value={amountRange.max ?? ''}
        onChange={(e) =>
          setAmountRange({
            ...amountRange,
            max: parseFloat(e.target.value) || undefined,
          })
        }
      />
    </Box>
  );
}
