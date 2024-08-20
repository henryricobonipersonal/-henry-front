import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { IStudentDTO } from '@/dtos/student-dto';
import { studentsService } from '@/services/students';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';
import type { IStudentsSearchOptions, IStudentsSearchResponse } from '@/services/students/fetch-students';

export type StudentsQueryData = WithStatus<IStudentsSearchResponse>[];

export const STUDENTS_QUERY_KEY = ['students'];

export function useStudents(searchOptions: IStudentsSearchOptions) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    staleTime: Number.POSITIVE_INFINITY,
    queryKey: [STUDENTS_QUERY_KEY, searchOptions],
    queryFn: async () => {
      try {
        return await studentsService.fetch(searchOptions);
      } catch (error) {
        const appError = error as AppError;

        if (
          appError.response.data.message ===
          'O estudante solicitado não foi encontrado.'
        ) {
          queryClient.setQueryData<IStudentsSearchResponse[]>(STUDENTS_QUERY_KEY, () => []);
        }
      }
    },
  });

  return {
    students: data?.students ?? [],
    meta: data?.meta,
    isLoading,
  };
}
