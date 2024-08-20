import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IStudentGoalDTO } from '@/dtos/student-goal-dto';
import { STUDENT_GOALS_QUERY_KEY } from '@/hooks/student-goals/use-student-goals';
import { studentGoalsService } from '@/services/student-goals';

export function useUpdateStudentGoal() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: studentGoalsService.update,
    onMutate: (variables) => {
      const previousStudentGoals =
        queryClient.getQueryData<IStudentGoalDTO[]>(STUDENT_GOALS_QUERY_KEY);

      queryClient.setQueryData<IStudentGoalDTO[]>(STUDENT_GOALS_QUERY_KEY, (old) =>
        old?.map((studentGoal) =>
          studentGoal.id === variables.id ? { ...studentGoal, ...variables } : studentGoal,
        ),
      );

      return { previousStudentGoals };
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: STUDENT_GOALS_QUERY_KEY });

      queryClient.setQueryData<IStudentGoalDTO[]>(
        STUDENT_GOALS_QUERY_KEY,
        context?.previousStudentGoals,
      );
    },
  });

  return {
    updateStudentGoal: mutateAsync,
    isLoading: isPending,
  };
}
