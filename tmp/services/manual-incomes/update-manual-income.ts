import type { IManualIncomeDTO } from '@/dtos/manual-income-dto';
import { httpClient } from '@/services/http-client';

type IUpdateManualIncomeDTO = Partial<Omit<IManualIncomeDTO, 'id' | 'createdAt'>> & {
  id: string;
};

export async function update({
  id,
  date,
  value,
  subject,
}: IUpdateManualIncomeDTO): Promise<IManualIncomeDTO> {
  const { data } = await httpClient.patch(`/manual-incomes/${id}`, {
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
