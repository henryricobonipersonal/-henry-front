import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IManualIncomeDTO } from '@/dtos/manual-income-dto';
import { DAILY_CASH_FLOW_QUERY_KEY } from '@/hooks/manual-incomes/use-manual-incomes';
import { manualIncomesService } from '@/services/manual-incomes';

export function useUpdateManualIncome() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: manualIncomesService.update,
    onMutate: (variables) => {
      const previousManualIncomes =
        queryClient.getQueryData<IManualIncomeDTO[]>(DAILY_CASH_FLOW_QUERY_KEY);

      queryClient.setQueryData<IManualIncomeDTO[]>(DAILY_CASH_FLOW_QUERY_KEY, (old) =>
        old?.map((manualIncome) =>
          manualIncome.id === variables.id ? { ...manualIncome, ...variables } : manualIncome,
        ),
      );

      return { previousManualIncomes };
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: DAILY_CASH_FLOW_QUERY_KEY });

      queryClient.setQueryData<IManualIncomeDTO[]>(
        DAILY_CASH_FLOW_QUERY_KEY,
        context?.previousManualIncomes,
      );
    },
  });

  return {
    updateManualIncome: mutateAsync,
    isLoading: isPending,
  };
}
