import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { ITeacherDTO } from '@/dtos/teacher-dto';
import { TEACHERS_QUERY_KEY } from '@/hooks/teachers/use-teachers';
import { teachersService } from '@/services/teachers';

export function useUpdateTeacher() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: teachersService.update,
    onMutate: (variables) => {
      const previousTeachers =
        queryClient.getQueryData<ITeacherDTO[]>(TEACHERS_QUERY_KEY);

      queryClient.setQueryData<ITeacherDTO[]>(TEACHERS_QUERY_KEY, (old) =>
        old?.map((teacher) =>
          teacher.id === variables.id ? { ...teacher, ...variables } : teacher,
        ),
      );

      return { previousTeachers };
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: TEACHERS_QUERY_KEY });

      queryClient.setQueryData<ITeacherDTO[]>(
        TEACHERS_QUERY_KEY,
        context?.previousTeachers,
      );
    },
  });

  return {
    updateTeacher: mutateAsync,
    isLoading: isPending,
  };
}
