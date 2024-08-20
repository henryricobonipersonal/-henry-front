import type { IManualExpenseDTO } from '@/dtos/manual-expense-dto';
import { httpClient } from '@/services/http-client';

type IUpdateManualExpenseDTO = Partial<Omit<IManualExpenseDTO, 'id' | 'createdAt'>> & {
  id: string;
};

export async function update({
  id,
  date,
  value,
  subject,
}: IUpdateManualExpenseDTO): Promise<IManualExpenseDTO> {
  const { data } = await httpClient.patch(`/manual-expenses/${id}`, {
    date,
    value,
    subject,
  });

  return {
    id: data.id,
    date: data.date,
    value: data.value,
    subject: data.subject,
    createdAt: data.createdAt,
  };
}
