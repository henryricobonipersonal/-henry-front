import { useQuery, useQueryClient } from '@tanstack/react-query';
import { teacherReportsService } from '@/services/teacher-reports';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';
import type { ITeacherReportsSearchOptions, ITeacherReportsSearchResponse } from '@/services/teacher-reports/fetch-teacher-reports';

export type TeacherReportsQueryData = WithStatus<ITeacherReportsSearchResponse>[];

export const TEACHER_REPORT_QUERY_KEY = ['teacher-reports'];

export function useTeacherReports(searchOptions: ITeacherReportsSearchOptions) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    staleTime: Number.POSITIVE_INFINITY,
    queryKey: [TEACHER_REPORT_QUERY_KEY, searchOptions],
    queryFn: async () => {
      try {
        return await teacherReportsService.fetch(searchOptions);
      } catch (error) {
        const appError = error as AppError;

        if (
          appError.response.data.message ===
          'O relatório do professor solicitado não foi encontrado.'
        ) {
          queryClient.setQueryData<ITeacherReportsSearchResponse[]>(TEACHER_REPORT_QUERY_KEY, () => []);
        }
      }
    },
  });

  return {
    teacherReports: data?.teacherReports ?? [],
    meta: data?.meta,
    isLoading,
  };
}
