import { Accounts } from '@models/enums';

export interface Account {
  id: string;
  name: string;
  balance: number;
  type: Accounts | string;
  accountNumber: string;
}
