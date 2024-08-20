import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { IManualIncomeDTO } from '@/dtos/manual-income-dto';
import { manualIncomesService } from '@/services/manual-incomes';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';
import type { IManualIncomesSearchOptions, IManualIncomesSearchResponse } from '@/services/manual-incomes/fetch-manual-incomes';

export type ManualIncomesQueryData = WithStatus<IManualIncomesSearchResponse>[];

export const MANUAL_INCOMES_QUERY_KEY = ['manual-incomes'];

export function useManualIncomes(searchOptions: IManualIncomesSearchOptions) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    staleTime: Number.POSITIVE_INFINITY,
    queryKey: [MANUAL_INCOMES_QUERY_KEY, searchOptions],
    queryFn: async () => {
      try {
        return await manualIncomesService.fetch(searchOptions);
      } catch (error) {
        const appError = error as AppError;

        if (
          appError.response.data.message ===
          'O fluxo de caixa manual solicitado não foi encontrado.'
        ) {
          queryClient.setQueryData<IManualIncomesSearchResponse[]>(MANUAL_INCOMES_QUERY_KEY, () => []);
        }
      }
    },
  });

  return {
    manualIncomes: data?.manualIncomes ?? [],
    meta: data?.meta,
    isLoading,
  };
}
