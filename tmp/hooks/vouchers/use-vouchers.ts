import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { IVoucherDTO } from '@/dtos/voucher-dto';
import { vouchersService } from '@/services/vouchers';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';
import type { IVouchersSearchOptions, IVouchersSearchResponse } from '@/services/vouchers/fetch-vouchers';

export type VouchersQueryData = WithStatus<IVouchersSearchResponse>[];

export const VOUCHER_QUERY_KEY = ['vouchers'];

export function useVouchers(searchOptions: IVouchersSearchOptions) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    staleTime: Number.POSITIVE_INFINITY,
    queryKey: [VOUCHER_QUERY_KEY, searchOptions],
    queryFn: async () => {
      try {
        return await vouchersService.fetch(searchOptions);
      } catch (error) {
        const appError = error as AppError;

        if (
          appError.response.data.message ===
          'O voucher solicitado não foi encontrado.'
        ) {
          queryClient.setQueryData<IVouchersSearchResponse[]>(VOUCHER_QUERY_KEY, () => []);
        }
      }
    },
  });

  return {
    vouchers: data?.vouchers ?? [],
    meta: data?.meta,
    isLoading,
  };
}
