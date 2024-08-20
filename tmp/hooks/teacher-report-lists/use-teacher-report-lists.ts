import { useQuery, useQueryClient } from '@tanstack/react-query';
import { teacherReportListService } from '@/services/teacher-report-lists';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';
import type { ITeacherReportListsSearchOptions, ITeacherReportListsSearchResponse } from '@/services/teacher-report-lists/fetch-teacher-report-lists';

export type TeacherReportListsQueryData = WithStatus<ITeacherReportListsSearchResponse>[];

export const TEACHER_REPORT_LIST_QUERY_KEY = ['teacher-report-list'];

export function useTeacherReportLists(searchOptions: ITeacherReportListsSearchOptions) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    staleTime: Number.POSITIVE_INFINITY,
    queryKey: [TEACHER_REPORT_LIST_QUERY_KEY, searchOptions],
    queryFn: async () => {
      try {
        return await teacherReportListService.fetch(searchOptions);
      } catch (error) {
        const appError = error as AppError;

        if (
          appError.response.data.message ===
          'A lista de relatórios do professor solicitada não foi encontrada.'
        ) {
          queryClient.setQueryData<ITeacherReportListsSearchResponse[]>(TEACHER_REPORT_LIST_QUERY_KEY, () => []);
        }
      }
    },
  });

  return {
    teacherReportLists: data?.teacherReportLists ?? [],
    meta: data?.meta,
    isLoading,
  };
}
