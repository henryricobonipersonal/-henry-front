import { useQuery, useQueryClient } from '@tanstack/react-query';
import { classReportsService } from '@/services/class-reports';
import type { IClassReportsSearchOptions, IClassReportsSearchResponse } from '@/services/class-reports/fetch-class-reports';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';

export type ClassReportsQueryData = WithStatus<IClassReportsSearchResponse>[];

export const CLASS_REPORT_QUERY_KEY = ['class-reports'];

export function useClassReports(searchOptions: IClassReportsSearchOptions) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    staleTime: Number.POSITIVE_INFINITY,
    queryKey: [CLASS_REPORT_QUERY_KEY, searchOptions],
    queryFn: async () => {
      try {
        return await classReportsService.fetch(searchOptions);
      } catch (error) {
        const appError = error as AppError;

        if (
          appError.response.data.message ===
          'O relatório de aula solicitado não foi encontrado.'
        ) {
          queryClient.setQueryData<IClassReportsSearchResponse[]>(CLASS_REPORT_QUERY_KEY, () => []);
        }
      }
    },
  });

  return {
    classReports: data?.classReports ?? [],
    meta: data?.meta,
    isLoading,
  };
}
