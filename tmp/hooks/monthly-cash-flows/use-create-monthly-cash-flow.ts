import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MONTHLY_CASH_FLOW_QUERY_KEY, type MonthlyCashFlowsQueryData } from '@/hooks/monthly-cash-flows/use-monthly-cash-flows';
import { monthlyCashFlowsService } from '@/services/monthly-cash-flows';

export function useCreateMonthlyCashFlow() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: monthlyCashFlowsService.create,
    onMutate: (variables) => {
      const tmpMonthlyCashFlowId = String(Math.random());

      queryClient.setQueryData<MonthlyCashFlowsQueryData>(MONTHLY_CASH_FLOW_QUERY_KEY, (old) => {
        return old?.concat({
          ...variables,
          id: tmpMonthlyCashFlowId,
          pendingRequestStatus: 'pending',
          createdAt: new Date().toISOString(),
        });
      });

      return { tmpMonthlyCashFlowId };
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: MONTHLY_CASH_FLOW_QUERY_KEY });

      queryClient.setQueryData<MonthlyCashFlowsQueryData>(MONTHLY_CASH_FLOW_QUERY_KEY, (old) =>
        old?.map((monthlyCashFlow) =>
          monthlyCashFlow.id === context.tmpMonthlyCashFlowId ? data : monthlyCashFlow,
        ),
      );
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: MONTHLY_CASH_FLOW_QUERY_KEY });

      queryClient.setQueryData<MonthlyCashFlowsQueryData>(MONTHLY_CASH_FLOW_QUERY_KEY, (old) =>
        old?.map((monthlyCashFlow) =>
          monthlyCashFlow.id === context?.tmpMonthlyCashFlowId
            ? { ...monthlyCashFlow, pendingRequestStatus: 'error' }
            : monthlyCashFlow,
        ),
      );
    },
  });

  return {
    createMonthlyCashFlow: mutateAsync,
    isLoading: isPending,
  };
}
