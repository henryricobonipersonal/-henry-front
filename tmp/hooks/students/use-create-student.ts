import { useMutation, useQueryClient } from '@tanstack/react-query';
import { STUDENTS_QUERY_KEY, type StudentsQueryData } from '@/hooks/students/use-students';
import { studentsService } from '@/services/students';

export function useCreateStudent() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: studentsService.create,
    onMutate: (variables) => {
      const tmpStudentId = String(Math.random());

      queryClient.setQueryData<StudentsQueryData>(STUDENTS_QUERY_KEY, (old) => {
        return old?.concat({
          ...variables,
          id: tmpStudentId,
          pendingRequestStatus: 'pending',
          createdAt: new Date().toISOString(),
        });
      });

      return { tmpStudentId };
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: STUDENTS_QUERY_KEY });

      queryClient.setQueryData<StudentsQueryData>(STUDENTS_QUERY_KEY, (old) =>
        old?.map((student) =>
          student.id === context.tmpStudentId ? data : student,
        ),
      );
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: STUDENTS_QUERY_KEY });

      queryClient.setQueryData<StudentsQueryData>(STUDENTS_QUERY_KEY, (old) =>
        old?.map((student) =>
          student.id === context?.tmpStudentId
            ? { ...student, pendingRequestStatus: 'error' }
            : student,
        ),
      );
    },
  });

  return {
    createStudent: mutateAsync,
    isLoading: isPending,
  };
}
