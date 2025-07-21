import { Transaction } from '@/models/interfaces/transactions';
import { useState } from 'react';
import * as yup from 'yup';
import { ValidationError } from 'yup';

export interface TransactionFormValues {
  accountId: string;
  date: string;
  amount: string;
  senderReceiver: string;
  message: string;
}

type FormErrors = Partial<Record<keyof TransactionFormValues, string>>;

const schema = yup.object({
  date: yup.string().required('Date is required'),
  amount: yup
    .number()
    .typeError('Amount must be a number')
    .required('Amount is required'),
  senderReceiver: yup.string().required('Sender/Receiver is required'),
  message: yup.string(),
});

interface UseAddTransactionFormProps {
  onSubmit: (data: Omit<Transaction, 'id'>) => void;
  onCancel: () => void;
}

export function useAddTransactionForm({
  onSubmit,
  onCancel,
}: UseAddTransactionFormProps) {
  const [values, setValues] = useState<TransactionFormValues>({
    accountId: '',
    date: '',
    amount: '',
    senderReceiver: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange =
    (field: keyof TransactionFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      setErrors({});

      const castedValues = {
        ...values,
        amount: Number(values.amount),
      };

      await schema.validate(castedValues, { abortEarly: false });

      onSubmit({
        accountId: castedValues.accountId,
        date: castedValues.date,
        amount: castedValues.amount,
        senderReceiver: castedValues.senderReceiver,
        message: castedValues.message,
      });

      setValues({
        accountId: '',
        date: '',
        amount: '',
        senderReceiver: '',
        message: '',
      });

      onCancel();
    } catch (error) {
      if (error instanceof ValidationError) {
        const newErrors: FormErrors = {};
        error.inner.forEach((err) => {
          if (err.path)
            newErrors[err.path as keyof TransactionFormValues] = err.message;
        });
        setErrors(newErrors);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit,
    onCancel,
  };
}
