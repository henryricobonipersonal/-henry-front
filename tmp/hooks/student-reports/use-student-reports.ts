import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { IStudentReportDTO } from '@/dtos/student-report-dto';
import { studentReportsService } from '@/services/student-reports';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';
import type { IStudentReportsSearchOptions, IStudentReportsSearchResponse } from '@/services/student-reports/fetch-student-reports';

export type StudentReportsQueryData = WithStatus<IStudentReportsSearchResponse>[];

export const STUDENT_REPORTS_QUERY_KEY = ['student-reports'];

export function useStudentReports(searchOptions: IStudentReportsSearchOptions) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    staleTime: Number.POSITIVE_INFINITY,
    queryKey: [STUDENT_REPORTS_QUERY_KEY, searchOptions],
    queryFn: async () => {
      try {
        return await studentReportsService.fetch(searchOptions);
      } catch (error) {
        const appError = error as AppError;

        if (
          appError.response.data.message ===
          'O relatório do estudante solicitado não foi encontrado.'
        ) {
          queryClient.setQueryData<IStudentReportsSearchResponse[]>(STUDENT_REPORTS_QUERY_KEY, () => []);
        }
      }
    },
  });

  return {
    studentReports: data?.studentReports ?? [],
    meta: data?.meta,
    isLoading,
  };
}
