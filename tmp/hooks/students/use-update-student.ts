import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IStudentDTO } from '@/dtos/student-dto';
import { STUDENTS_QUERY_KEY } from '@/hooks/students/use-students';
import { studentsService } from '@/services/students';

export function useUpdateStudent() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: studentsService.update,
    onMutate: (variables) => {
      const previousStudents =
        queryClient.getQueryData<IStudentDTO[]>(STUDENTS_QUERY_KEY);

      queryClient.setQueryData<IStudentDTO[]>(STUDENTS_QUERY_KEY, (old) =>
        old?.map((student) =>
          student.id === variables.id ? { ...student, ...variables } : student,
        ),
      );

      return { previousStudents };
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: STUDENTS_QUERY_KEY });

      queryClient.setQueryData<IStudentDTO[]>(
        STUDENTS_QUERY_KEY,
        context?.previousStudents,
      );
    },
  });

  return {
    updateStudent: mutateAsync,
    isLoading: isPending,
  };
}
