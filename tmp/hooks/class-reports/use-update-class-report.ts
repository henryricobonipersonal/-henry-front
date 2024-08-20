import type { IClassReportDTO } from '@/dtos/class-report-dto';
import { CLASS_REPORT_QUERY_KEY } from '@/hooks/class-reports/use-class-reports';
import { classReportsService } from '@/services/class-reports';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateClassReport() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: classReportsService.update,
    onMutate: (variables) => {
      const previousClassReports =
        queryClient.getQueryData<IClassReportDTO[]>(CLASS_REPORT_QUERY_KEY);

      queryClient.setQueryData<IClassReportDTO[]>(CLASS_REPORT_QUERY_KEY, (old) =>
        old?.map((classReport) =>
          classReport.id === variables.id ? { ...classReport, ...variables } : classReport,
        ),
      );

      return { previousClassReports };
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: CLASS_REPORT_QUERY_KEY });

      queryClient.setQueryData<IClassReportDTO[]>(
        CLASS_REPORT_QUERY_KEY,
        context?.previousClassReports,
      );
    },
  });

  return {
    updateClassReport: mutateAsync,
    isLoading: isPending,
  };
}
