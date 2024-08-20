import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DAILY_CASH_FLOW_QUERY_KEY, type ManualIncomesQueryData } from '@/hooks/manual-incomes/use-manual-incomes';
import { manualIncomesService } from '@/services/manual-incomes';

export function useCreateManualIncome() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: manualIncomesService.create,
    onMutate: (variables) => {
      const tmpManualIncomeId = String(Math.random());

      queryClient.setQueryData<ManualIncomesQueryData>(DAILY_CASH_FLOW_QUERY_KEY, (old) => {
        return old?.concat({
          ...variables,
          id: tmpManualIncomeId,
          pendingRequestStatus: 'pending',
          createdAt: new Date().toISOString(),
        });
      });

      return { tmpManualIncomeId };
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: DAILY_CASH_FLOW_QUERY_KEY });

      queryClient.setQueryData<ManualIncomesQueryData>(DAILY_CASH_FLOW_QUERY_KEY, (old) =>
        old?.map((manualIncome) =>
          manualIncome.id === context.tmpManualIncomeId ? data : manualIncome,
        ),
      );
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: DAILY_CASH_FLOW_QUERY_KEY });

      queryClient.setQueryData<ManualIncomesQueryData>(DAILY_CASH_FLOW_QUERY_KEY, (old) =>
        old?.map((manualIncome) =>
          manualIncome.id === context?.tmpManualIncomeId
            ? { ...manualIncome, pendingRequestStatus: 'error' }
            : manualIncome,
        ),
      );
    },
  });

  return {
    createManualIncome: mutateAsync,
    isLoading: isPending,
  };
}
