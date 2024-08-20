import type { IDailyCashFlowDTO } from '@/dtos/daily-cash-flow-dto';
import { dailyCashFlowsService } from '@/services/daily-cash-flows';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { IDailyCashFlowsSearchOptions, IDailyCashFlowsSearchResponse } from '@/services/daily-cash-flows/fetch-daily-cash-flows';

export type DailyCashFlowsQueryData = WithStatus<IDailyCashFlowsSearchResponse>[];

export const DAILY_CASH_FLOW_QUERY_KEY = ['daily-cash-flows'];

export function useDailyCashFlows(searchOptions: IDailyCashFlowsSearchOptions) {
	const queryClient = useQueryClient();

	const { data, isLoading } = useQuery({
		staleTime: Number.POSITIVE_INFINITY,
		queryKey: [DAILY_CASH_FLOW_QUERY_KEY, searchOptions],
		queryFn: async () => {
			try {
				return await dailyCashFlowsService.fetch(searchOptions);
			} catch (error) {
				const appError = error as AppError;

				if (
					appError.response.data.message ===
					'O fluxo de caixa diário solicitado não foi encontrado.'
				) {
					queryClient.setQueryData<IDailyCashFlowsSearchResponse[]>(DAILY_CASH_FLOW_QUERY_KEY, () => []);
				}
			}
		},
	});

	return {
		dailyCashFlows: data?.dailyCashFlows ?? [],
		meta: data?.meta,
		isLoading,
	};
}
