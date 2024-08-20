import { dailyCashFlowsService } from '@/services/daily-cash-flows'
import {
	DAILY_CASH_FLOW_QUERY_KEY,
	type DailyCashFlowsQueryData,
} from '@/hooks/daily-cash-flows/use-daily-cash-flows'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useCreateDailyCashFlow() {
	const queryClient = useQueryClient()

	const { mutateAsync, isPending } = useMutation({
		mutationFn: dailyCashFlowsService.create,
		onMutate: (variables) => {
			const tmpDailyCashFlowId = String(Math.random())

			queryClient.setQueryData<DailyCashFlowsQueryData>(
				DAILY_CASH_FLOW_QUERY_KEY,
				(old) => {
					return old?.concat({
						...variables,
						id: tmpDailyCashFlowId,
						pendingRequestStatus: 'pending',
						createdAt: new Date().toISOString(),
					})
				},
			)

			return { tmpDailyCashFlowId }
		},
		onSuccess: async (data, _variables, context) => {
			await queryClient.cancelQueries({ queryKey: DAILY_CASH_FLOW_QUERY_KEY })

			queryClient.setQueryData<DailyCashFlowsQueryData>(
				DAILY_CASH_FLOW_QUERY_KEY,
				(old) =>
					old?.map((dailyCashFlow) =>
						dailyCashFlow.id === context.tmpDailyCashFlowId
							? data
							: dailyCashFlow,
					),
			)
		},
		onError: async (_error, _variables, context) => {
			await queryClient.cancelQueries({ queryKey: DAILY_CASH_FLOW_QUERY_KEY })

			queryClient.setQueryData<DailyCashFlowsQueryData>(
				DAILY_CASH_FLOW_QUERY_KEY,
				(old) =>
					old?.map((dailyCashFlow) =>
						dailyCashFlow.id === context?.tmpDailyCashFlowId
							? { ...dailyCashFlow, pendingRequestStatus: 'error' }
							: dailyCashFlow,
					),
			)
		},
	})

	return {
		createDailyCashFlow: mutateAsync,
		isLoading: isPending,
	}
}
