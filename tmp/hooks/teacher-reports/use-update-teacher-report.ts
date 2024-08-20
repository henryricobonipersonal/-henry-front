import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { ITeacherReportDTO } from '@/dtos/teacher-report-dto';
import { TEACHER_REPORT_QUERY_KEY } from '@/hooks/teacher-reports/use-teacher-reports';
import { teacherReportsService } from '@/services/teacher-reports';

export function useUpdateTeacherReport() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: teacherReportsService.update,
    onMutate: (variables) => {
      const previousTeacherReports =
        queryClient.getQueryData<ITeacherReportDTO[]>(TEACHER_REPORT_QUERY_KEY);

      queryClient.setQueryData<ITeacherReportDTO[]>(TEACHER_REPORT_QUERY_KEY, (old) =>
        old?.map((teacherReport) =>
          teacherReport.id === variables.id ? { ...teacherReport, ...variables } : teacherReport,
        ),
      );

      return { previousTeacherReports };
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: TEACHER_REPORT_QUERY_KEY });

      queryClient.setQueryData<ITeacherReportDTO[]>(
        TEACHER_REPORT_QUERY_KEY,
        context?.previousTeacherReports,
      );
    },
  });

  return {
    updateTeacherReport: mutateAsync,
    isLoading: isPending,
  };
}
