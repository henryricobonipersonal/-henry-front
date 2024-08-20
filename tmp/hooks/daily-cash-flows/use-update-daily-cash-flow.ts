import type { IDailyCashFlowDTO } from '@/dtos/daily-cash-flow-dto'
import { DAILY_CASH_FLOW_QUERY_KEY } from '@/hooks/daily-cash-flows/use-daily-cash-flows'
import { dailyCashFlowsService } from '@/services/daily-cash-flows'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useUpdateDailyCashFlow() {
	const queryClient = useQueryClient()

	const { mutateAsync, isPending } = useMutation({
		mutationFn: dailyCashFlowsService.update,
		onMutate: (variables) => {
			const previousDailyCashFlows = queryClient.getQueryData<
				IDailyCashFlowDTO[]
			>(DAILY_CASH_FLOW_QUERY_KEY)

			queryClient.setQueryData<IDailyCashFlowDTO[]>(
				DAILY_CASH_FLOW_QUERY_KEY,
				(old) =>
					old?.map((dailyCashFlow) =>
						dailyCashFlow.id === variables.id
							? { ...dailyCashFlow, ...variables }
							: dailyCashFlow,
					),
			)

			return { previousDailyCashFlows }
		},
		onError: async (_error, _variables, context) => {
			await queryClient.cancelQueries({ queryKey: DAILY_CASH_FLOW_QUERY_KEY })

			queryClient.setQueryData<IDailyCashFlowDTO[]>(
				DAILY_CASH_FLOW_QUERY_KEY,
				context?.previousDailyCashFlows,
			)
		},
	})

	return {
		updateDailyCashFlow: mutateAsync,
		isLoading: isPending,
	}
}
