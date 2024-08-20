import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { IManualExpenseDTO } from '@/dtos/manual-expense-dto';
import { manualExpensesService } from '@/services/manual-expenses';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';
import type { IManualExpensesSearchOptions, IManualExpensesSearchResponse } from '@/services/manual-expenses/fetch-manual-expenses';

export type ManualExpensesQueryData = WithStatus<IManualExpensesSearchResponse>[];

export const MANUAL_EXPENSES_QUERY_KEY = ['manual-expenses'];

export function useManualExpenses(searchOptions: IManualExpensesSearchOptions) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    staleTime: Number.POSITIVE_INFINITY,
    queryKey: [MANUAL_EXPENSES_QUERY_KEY, searchOptions],
    queryFn: async () => {
      try {
        return await manualExpensesService.fetch(searchOptions);
      } catch (error) {
        const appError = error as AppError;

        if (
          appError.response.data.message ===
          'O fluxo de caixa manual solicitado não foi encontrado.'
        ) {
          queryClient.setQueryData<IManualExpensesSearchResponse[]>(MANUAL_EXPENSES_QUERY_KEY, () => []);
        }
      }
    },
  });

  return {
    manualExpenses: data?.manualExpenses ?? [],
    meta: data?.meta,
    isLoading,
  };
}
