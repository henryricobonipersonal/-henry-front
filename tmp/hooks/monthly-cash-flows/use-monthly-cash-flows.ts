import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { IMonthlyCashFlowDTO } from '@/dtos/monthly-cash-flow-dto';
import { monthlyCashFlowsService } from '@/services/monthly-cash-flows';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';
import type { IMonthlyCashFlowsSearchOptions, IMonthlyCashFlowsSearchResponse } from '@/services/monthly-cash-flows/fetch-monthly-cash-flows';

export type MonthlyCashFlowsQueryData = WithStatus<IMonthlyCashFlowsSearchResponse>[];

export const MONTHLY_CASH_FLOW_QUERY_KEY = ['monthly-cash-flows'];

export function useMonthlyCashFlows(searchOptions: IMonthlyCashFlowsSearchOptions) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    staleTime: Number.POSITIVE_INFINITY,
    queryKey: [MONTHLY_CASH_FLOW_QUERY_KEY, searchOptions],
    queryFn: async () => {
      try {
        return await monthlyCashFlowsService.fetch(searchOptions);
      } catch (error) {
        const appError = error as AppError;

        if (
          appError.response.data.message ===
          'O fluxo de caixa mensal solicitado não foi encontrado.'
        ) {
          queryClient.setQueryData<IMonthlyCashFlowsSearchResponse[]>(MONTHLY_CASH_FLOW_QUERY_KEY, () => []);
        }
      }
    },
  });

  return {
    monthlyCashFlows: data?.monthlyCashFlows ?? [],
    meta: data?.meta,
    isLoading,
  };
}
