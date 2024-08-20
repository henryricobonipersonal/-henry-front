import type { IVoucherDTO } from '@/dtos/voucher-dto';
import { httpClient } from '@/services/http-client';

type IUpdateVoucherDTO = Partial<Omit<IVoucherDTO, 'id' | 'createdAt'>> & {
  id: string;
};

export async function update({
  id,
  date,
  value,
}: IUpdateVoucherDTO): Promise<IVoucherDTO> {
  const { data } = await httpClient.patch(`/vouchers/${id}`, {
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
