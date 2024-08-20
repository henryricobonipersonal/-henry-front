import type { IDailyCashFlowDTO } from '@/dtos/daily-cash-flow-dto';
import { httpClient } from '@/services/http-client';

type IUpdateDailyCashFlowDTO = Partial<Omit<IDailyCashFlowDTO, 'id' | 'createdAt'>> & {
  id: string;
};

export async function update({
  id,
  date,
  automaticIncome,
  manualIncome,
  automaticExpense,
  manualExpense,
  amount,
}: IUpdateDailyCashFlowDTO): Promise<IDailyCashFlowDTO> {
  const { data } = await httpClient.patch(`/daily-cash-flows/${id}`, {
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
