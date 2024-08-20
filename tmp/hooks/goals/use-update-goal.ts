import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IGoalDTO } from '@/dtos/goal-dto';
import { GOALS_QUERY_KEY } from '@/hooks/goals/use-goals';
import { goalsService } from '@/services/goals';

export function useUpdateGoal() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: goalsService.update,
    onMutate: (variables) => {
      const previousGoals =
        queryClient.getQueryData<IGoalDTO[]>(GOALS_QUERY_KEY);

      queryClient.setQueryData<IGoalDTO[]>(GOALS_QUERY_KEY, (old) =>
        old?.map((goal) =>
          goal.id === variables.id ? { ...goal, ...variables } : goal,
        ),
      );

      return { previousGoals };
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: GOALS_QUERY_KEY });

      queryClient.setQueryData<IGoalDTO[]>(
        GOALS_QUERY_KEY,
        context?.previousGoals,
      );
    },
  });

  return {
    updateGoal: mutateAsync,
    isLoading: isPending,
  };
}
