import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DAILY_CASH_FLOW_QUERY_KEY, type ManualExpensesQueryData } from '@/hooks/manual-expenses/use-manual-expenses';
import { manualExpensesService } from '@/services/manual-expenses';

export function useCreateManualExpense() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: manualExpensesService.create,
    onMutate: (variables) => {
      const tmpManualExpenseId = String(Math.random());

      queryClient.setQueryData<ManualExpensesQueryData>(DAILY_CASH_FLOW_QUERY_KEY, (old) => {
        return old?.concat({
          ...variables,
          id: tmpManualExpenseId,
          pendingRequestStatus: 'pending',
          createdAt: new Date().toISOString(),
        });
      });

      return { tmpManualExpenseId };
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: DAILY_CASH_FLOW_QUERY_KEY });

      queryClient.setQueryData<ManualExpensesQueryData>(DAILY_CASH_FLOW_QUERY_KEY, (old) =>
        old?.map((manualExpense) =>
          manualExpense.id === context.tmpManualExpenseId ? data : manualExpense,
        ),
      );
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: DAILY_CASH_FLOW_QUERY_KEY });

      queryClient.setQueryData<ManualExpensesQueryData>(DAILY_CASH_FLOW_QUERY_KEY, (old) =>
        old?.map((manualExpense) =>
          manualExpense.id === context?.tmpManualExpenseId
            ? { ...manualExpense, pendingRequestStatus: 'error' }
            : manualExpense,
        ),
      );
    },
  });

  return {
    createManualExpense: mutateAsync,
    isLoading: isPending,
  };
}
