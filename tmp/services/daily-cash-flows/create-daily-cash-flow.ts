import type { IDailyCashFlowDTO } from '@/dtos/daily-cash-flow-dto';
import { httpClient } from '@/services/http-client';

type ICreateDailyCashFlowDTO = Omit<IDailyCashFlowDTO, 'id' | 'createdAt'>;

export async function create({
  date,
  automaticIncome,
  manualIncome,
  automaticExpense,
  manualExpense,
  amount,
}: ICreateDailyCashFlowDTO): Promise<IDailyCashFlowDTO> {
  const { data } = await httpClient.post('/daily-cash-flows', {
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
