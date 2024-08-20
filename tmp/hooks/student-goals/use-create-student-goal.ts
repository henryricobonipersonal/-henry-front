import { useMutation, useQueryClient } from '@tanstack/react-query';
import { STUDENT_GOALS_QUERY_KEY, type StudentGoalsQueryData } from '@/hooks/student-goals/use-student-goals';
import { studentGoalsService } from '@/services/student-goals';

export function useCreateStudentGoal() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: studentGoalsService.create,
    onMutate: (variables) => {
      const tmpStudentGoalId = String(Math.random());

      queryClient.setQueryData<StudentGoalsQueryData>(STUDENT_GOALS_QUERY_KEY, (old) => {
        return old?.concat({
          ...variables,
          id: tmpStudentGoalId,
          pendingRequestStatus: 'pending',
          createdAt: new Date().toISOString(),
        });
      });

      return { tmpStudentGoalId };
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: STUDENT_GOALS_QUERY_KEY });

      queryClient.setQueryData<StudentGoalsQueryData>(STUDENT_GOALS_QUERY_KEY, (old) =>
        old?.map((studentGoal) =>
          studentGoal.id === context.tmpStudentGoalId ? data : studentGoal,
        ),
      );
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: STUDENT_GOALS_QUERY_KEY });

      queryClient.setQueryData<StudentGoalsQueryData>(STUDENT_GOALS_QUERY_KEY, (old) =>
        old?.map((studentGoal) =>
          studentGoal.id === context?.tmpStudentGoalId
            ? { ...studentGoal, pendingRequestStatus: 'error' }
            : studentGoal,
        ),
      );
    },
  });

  return {
    createStudentGoal: mutateAsync,
    isLoading: isPending,
  };
}
