import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IStudentReportDTO } from '@/dtos/student-report-dto';
import { STUDENT_REPORTS_QUERY_KEY } from '@/hooks/student-reports/use-student-reports';
import { studentReportsService } from '@/services/student-reports';

export function useUpdateStudentReport() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: studentReportsService.update,
    onMutate: (variables) => {
      const previousStudentReports =
        queryClient.getQueryData<IStudentReportDTO[]>(STUDENT_REPORTS_QUERY_KEY);

      queryClient.setQueryData<IStudentReportDTO[]>(STUDENT_REPORTS_QUERY_KEY, (old) =>
        old?.map((studentReport) =>
          studentReport.id === variables.id ? { ...studentReport, ...variables } : studentReport,
        ),
      );

      return { previousStudentReports };
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: STUDENT_REPORTS_QUERY_KEY });

      queryClient.setQueryData<IStudentReportDTO[]>(
        STUDENT_REPORTS_QUERY_KEY,
        context?.previousStudentReports,
      );
    },
  });

  return {
    updateStudentReport: mutateAsync,
    isLoading: isPending,
  };
}
