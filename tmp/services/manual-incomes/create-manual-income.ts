import type { IManualIncomeDTO } from '@/dtos/manual-income-dto';
import { httpClient } from '@/services/http-client';

type ICreateManualIncomeDTO = Omit<IManualIncomeDTO, 'id' | 'createdAt'>;

export async function create({
  date,
  value,
  subject,
}: ICreateManualIncomeDTO): Promise<IManualIncomeDTO> {
  const { data } = await httpClient.post('/manual-incomes', {
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
