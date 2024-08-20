import { httpClient } from '@/services/http-client';

export interface Params {
  id: string;
}

export async function remove({ id }: Params): Promise<void> {
  await httpClient.delete(`/manual-incomes/${id}`);
}
