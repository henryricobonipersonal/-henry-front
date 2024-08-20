import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IManualExpenseDTO } from '@/dtos/manual-expense-dto';
import { DAILY_CASH_FLOW_QUERY_KEY } from '@/hooks/manual-expenses/use-manual-expenses';
import { manualExpensesService } from '@/services/manual-expenses';

export function useUpdateManualExpense() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: manualExpensesService.update,
    onMutate: (variables) => {
      const previousManualExpenses =
        queryClient.getQueryData<IManualExpenseDTO[]>(DAILY_CASH_FLOW_QUERY_KEY);

      queryClient.setQueryData<IManualExpenseDTO[]>(DAILY_CASH_FLOW_QUERY_KEY, (old) =>
        old?.map((manualExpense) =>
          manualExpense.id === variables.id ? { ...manualExpense, ...variables } : manualExpense,
        ),
      );

      return { previousManualExpenses };
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: DAILY_CASH_FLOW_QUERY_KEY });

      queryClient.setQueryData<IManualExpenseDTO[]>(
        DAILY_CASH_FLOW_QUERY_KEY,
        context?.previousManualExpenses,
      );
    },
  });

  return {
    updateManualExpense: mutateAsync,
    isLoading: isPending,
  };
}
