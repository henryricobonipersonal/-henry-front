import type { IVoucherDTO } from '@/dtos/voucher-dto';
import { httpClient } from '@/services/http-client';

type ICreateVoucherDTO = Omit<IVoucherDTO, 'id' | 'createdAt'>;

export async function create({
  date,
  value,
}: ICreateVoucherDTO): Promise<IVoucherDTO> {
  const { data } = await httpClient.post('/vouchers', {
    date,
    value,
  });

  return {
    id: data.id,
    date: data.date,
    value: data.value,
    createdAt: data.createdAt,
  };
}
