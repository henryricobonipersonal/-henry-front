import type { IManualExpenseDTO } from '@/dtos/manual-expense-dto';
import { httpClient } from '@/services/http-client';

type ICreateManualExpenseDTO = Omit<IManualExpenseDTO, 'id' | 'createdAt'>;

export async function create({
  date,
  value,
  subject,
}: ICreateManualExpenseDTO): Promise<IManualExpenseDTO> {
  const { data } = await httpClient.post('/manual-expenses', {
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
