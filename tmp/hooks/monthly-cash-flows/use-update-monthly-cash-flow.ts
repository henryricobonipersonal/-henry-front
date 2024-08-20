import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IMonthlyCashFlowDTO } from '@/dtos/monthly-cash-flow-dto';
import { MONTHLY_CASH_FLOW_QUERY_KEY } from '@/hooks/monthly-cash-flows/use-monthly-cash-flows';
import { monthlyCashFlowsService } from '@/services/monthly-cash-flows';

export function useUpdateMonthlyCashFlow() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: monthlyCashFlowsService.update,
    onMutate: (variables) => {
      const previousMonthlyCashFlows =
        queryClient.getQueryData<IMonthlyCashFlowDTO[]>(MONTHLY_CASH_FLOW_QUERY_KEY);

      queryClient.setQueryData<IMonthlyCashFlowDTO[]>(MONTHLY_CASH_FLOW_QUERY_KEY, (old) =>
        old?.map((monthlyCashFlow) =>
          monthlyCashFlow.id === variables.id ? { ...monthlyCashFlow, ...variables } : monthlyCashFlow,
        ),
      );

      return { previousMonthlyCashFlows };
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: MONTHLY_CASH_FLOW_QUERY_KEY });

      queryClient.setQueryData<IMonthlyCashFlowDTO[]>(
        MONTHLY_CASH_FLOW_QUERY_KEY,
        context?.previousMonthlyCashFlows,
      );
    },
  });

  return {
    updateMonthlyCashFlow: mutateAsync,
    isLoading: isPending,
  };
}
