export interface IDailyCashFlowDTO {
  id: string;
  date: string;
  automaticIncome: number;
  manualIncome: number;
  automaticExpense: number;
  manualExpense: number;
  amount: number;
  createdAt: string;
}
