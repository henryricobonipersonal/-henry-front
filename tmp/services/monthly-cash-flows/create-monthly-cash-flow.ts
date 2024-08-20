import type { IMonthlyCashFlowDTO } from '@/dtos/monthly-cash-flow-dto';
import { httpClient } from '@/services/http-client';

type ICreateMonthlyCashFlowDTO = Omit<IMonthlyCashFlowDTO, 'id' | 'createdAt'>;

export async function create({
  date,
  automaticIncome,
  manualIncome,
  automaticExpense,
  manualExpense,
  amount,
}: ICreateMonthlyCashFlowDTO): Promise<IMonthlyCashFlowDTO> {
  const { data } = await httpClient.post('/monthly-cash-flows', {
    date,
    automaticIncome,
    manualIncome,
    automaticExpense,
    manualExpense,
    amount,
  });

  return {
    id: data.id,
    date: data.date,
    automaticIncome: data.automaticIncome,
    manualIncome: data.manualIncome,
    automaticExpense: data.automaticExpense,
    manualExpense: data.manualExpense,
    amount: data.amount,
    createdAt: data.createdAt,
  };
}
