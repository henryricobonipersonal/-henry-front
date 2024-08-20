import { useMutation, useQueryClient } from '@tanstack/react-query';
import { STUDENT_REPORTS_QUERY_KEY, type StudentReportsQueryData } from '@/hooks/student-reports/use-student-reports';
import { studentReportsService } from '@/services/student-reports';

export function useCreateStudentReport() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: studentReportsService.create,
    onMutate: (variables) => {
      const tmpStudentReportId = String(Math.random());

      queryClient.setQueryData<StudentReportsQueryData>(STUDENT_REPORTS_QUERY_KEY, (old) => {
        return old?.concat({
          ...variables,
          id: tmpStudentReportId,
          pendingRequestStatus: 'pending',
          createdAt: new Date().toISOString(),
        });
      });

      return { tmpStudentReportId };
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: STUDENT_REPORTS_QUERY_KEY });

      queryClient.setQueryData<StudentReportsQueryData>(STUDENT_REPORTS_QUERY_KEY, (old) =>
        old?.map((studentReport) =>
          studentReport.id === context.tmpStudentReportId ? data : studentReport,
        ),
      );
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: STUDENT_REPORTS_QUERY_KEY });

      queryClient.setQueryData<StudentReportsQueryData>(STUDENT_REPORTS_QUERY_KEY, (old) =>
        old?.map((studentReport) =>
          studentReport.id === context?.tmpStudentReportId
            ? { ...studentReport, pendingRequestStatus: 'error' }
            : studentReport,
        ),
      );
    },
  });

  return {
    createStudentReport: mutateAsync,
    isLoading: isPending,
  };
}
