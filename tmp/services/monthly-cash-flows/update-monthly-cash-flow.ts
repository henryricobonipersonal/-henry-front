import type { IMonthlyCashFlowDTO } from '@/dtos/monthly-cash-flow-dto';
import { httpClient } from '@/services/http-client';

type IUpdateMonthlyCashFlowDTO = Partial<Omit<IMonthlyCashFlowDTO, 'id' | 'createdAt'>> & {
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
}: IUpdateMonthlyCashFlowDTO): Promise<IMonthlyCashFlowDTO> {
  const { data } = await httpClient.patch(`/monthly-cash-flows/${id}`, {
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
