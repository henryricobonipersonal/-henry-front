import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TEACHER_REPORT_QUERY_KEY, type TeacherReportsQueryData } from '@/hooks/teacher-reports/use-teacher-reports';
import { teacherReportsService } from '@/services/teacher-reports';

export function useCreateTeacherReport() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: teacherReportsService.create,
    onMutate: (variables) => {
      const tmpTeacherReportId = String(Math.random());

      queryClient.setQueryData<TeacherReportsQueryData>(TEACHER_REPORT_QUERY_KEY, (old) => {
        return old?.concat({
          ...variables,
          id: tmpTeacherReportId,
          pendingRequestStatus: 'pending',
          createdAt: new Date().toISOString(),
        });
      });

      return { tmpTeacherReportId };
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: TEACHER_REPORT_QUERY_KEY });

      queryClient.setQueryData<TeacherReportsQueryData>(TEACHER_REPORT_QUERY_KEY, (old) =>
        old?.map((teacherReport) =>
          teacherReport.id === context.tmpTeacherReportId ? data : teacherReport,
        ),
      );
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: TEACHER_REPORT_QUERY_KEY });

      queryClient.setQueryData<TeacherReportsQueryData>(TEACHER_REPORT_QUERY_KEY, (old) =>
        old?.map((teacherReport) =>
          teacherReport.id === context?.tmpTeacherReportId
            ? { ...teacherReport, pendingRequestStatus: 'error' }
            : teacherReport,
        ),
      );
    },
  });

  return {
    createTeacherReport: mutateAsync,
    isLoading: isPending,
  };
}
