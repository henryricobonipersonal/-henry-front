import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GOALS_QUERY_KEY, type GoalsQueryData } from '@/hooks/goals/use-goals';
import { goalsService } from '@/services/goals';

export function useCreateGoal() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: goalsService.create,
    onMutate: (variables) => {
      const tmpGoalId = String(Math.random());

      queryClient.setQueryData<GoalsQueryData>(GOALS_QUERY_KEY, (old) => {
        return old?.concat({
          ...variables,
          id: tmpGoalId,
          pendingRequestStatus: 'pending',
          createdAt: new Date().toISOString(),
        });
      });

      return { tmpGoalId };
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: GOALS_QUERY_KEY });

      queryClient.setQueryData<GoalsQueryData>(GOALS_QUERY_KEY, (old) =>
        old?.map((goal) =>
          goal.id === context.tmpGoalId ? data : goal,
        ),
      );
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: GOALS_QUERY_KEY });

      queryClient.setQueryData<GoalsQueryData>(GOALS_QUERY_KEY, (old) =>
        old?.map((goal) =>
          goal.id === context?.tmpGoalId
            ? { ...goal, pendingRequestStatus: 'error' }
            : goal,
        ),
      );
    },
  });

  return {
    createGoal: mutateAsync,
    isLoading: isPending,
  };
}
