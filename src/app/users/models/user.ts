export interface IUser {
  id: number;
  createdAt: Date;
  name: string;
  lastName: string;
  accountNumber: number;
  amount: number;
  transactionType: string;
  email: string;
  active: boolean;
  country: string;
  telephone: string;
}
