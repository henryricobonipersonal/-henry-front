import type { IClassReportDTO } from '@/dtos/class-report-dto';
import { CLASS_REPORT_QUERY_KEY } from '@/hooks/class-reports/use-class-reports';
import { classReportsService } from '@/services/class-reports';
import type { IClassReportsSearchResponse } from '@/services/class-reports/fetch-class-reports';
import type { WithStatus } from '@/utils/with-status';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateClassReport() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: classReportsService.create,
    onMutate: (variables) => {
      const tmpClassReportId = String(Math.random());

      queryClient.setQueryData<IClassReportsSearchResponse>(CLASS_REPORT_QUERY_KEY, (old) => {
        if (!old) return old;

        const newClassReport: WithStatus<IClassReportDTO> = {
          ...variables,
          id: tmpClassReportId,
          pendingRequestStatus: 'pending',
          createdAt: new Date().toISOString(),
        };

        return {
          ...old,
          classReports: old.classReports.concat(newClassReport),
        };
      });

      return { tmpClassReportId };
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: CLASS_REPORT_QUERY_KEY });

      queryClient.setQueryData<IClassReportsSearchResponse>(CLASS_REPORT_QUERY_KEY, (old) => {
        if (!old) return old;

        return {
          ...old,
          classReports: old.classReports.map((classReport) =>
            classReport.id === context.tmpClassReportId ? data : classReport,
          ),
        };
      });
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: CLASS_REPORT_QUERY_KEY });

      queryClient.setQueryData<IClassReportsSearchResponse>(CLASS_REPORT_QUERY_KEY, (old) => {
        if (!old) return old;

        return {
          ...old,
          classReports: old.classReports.map((classReport) =>
            classReport.id === context?.tmpClassReportId
              ? { ...classReport, pendingRequestStatus: 'error' }
              : classReport,
          ),
        };
      });
    },
  });

  return {
    createClassReport: mutateAsync,
    isLoading: isPending,
  };
}
