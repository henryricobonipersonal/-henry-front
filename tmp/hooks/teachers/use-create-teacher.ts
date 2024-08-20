import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TEACHERS_QUERY_KEY, type TeachersQueryData } from '@/hooks/teachers/use-teachers';
import { teachersService } from '@/services/teachers';

export function useCreateTeacher() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: teachersService.create,
    onMutate: (variables) => {
      const tmpTeacherId = String(Math.random());

      queryClient.setQueryData<TeachersQueryData>(TEACHERS_QUERY_KEY, (old) => {
        return old?.concat({
          ...variables,
          id: tmpTeacherId,
          pendingRequestStatus: 'pending',
          createdAt: new Date().toISOString(),
        });
      });

      return { tmpTeacherId };
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: TEACHERS_QUERY_KEY });

      queryClient.setQueryData<TeachersQueryData>(TEACHERS_QUERY_KEY, (old) =>
        old?.map((teacher) =>
          teacher.id === context.tmpTeacherId ? data : teacher,
        ),
      );
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: TEACHERS_QUERY_KEY });

      queryClient.setQueryData<TeachersQueryData>(TEACHERS_QUERY_KEY, (old) =>
        old?.map((teacher) =>
          teacher.id === context?.tmpTeacherId
            ? { ...teacher, pendingRequestStatus: 'error' }
            : teacher,
        ),
      );
    },
  });

  return {
    createTeacher: mutateAsync,
    isLoading: isPending,
  };
}
