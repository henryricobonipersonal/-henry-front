import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TEACHER_REPORT_LIST_QUERY_KEY, type TeacherReportListsQueryData } from '@/hooks/teacher-report-list/use-teacher-report-list';
import { teacherReportListService } from '@/services/teacher-report-list';

export function useCreateTeacherReportList() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: teacherReportListService.create,
    onMutate: (variables) => {
      const tmpTeacherReportListId = String(Math.random());

      queryClient.setQueryData<TeacherReportListsQueryData>(TEACHER_REPORT_LIST_QUERY_KEY, (old) => {
        return old?.concat({
          ...variables,
          id: tmpTeacherReportListId,
          pendingRequestStatus: 'pending',
          createdAt: new Date().toISOString(),
        });
      });

      return { tmpTeacherReportListId };
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: TEACHER_REPORT_LIST_QUERY_KEY });

      queryClient.setQueryData<TeacherReportListsQueryData>(TEACHER_REPORT_LIST_QUERY_KEY, (old) =>
        old?.map((teacherReportList) =>
          teacherReportList.id === context.tmpTeacherReportListId ? data : teacherReportList,
        ),
      );
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: TEACHER_REPORT_LIST_QUERY_KEY });

      queryClient.setQueryData<TeacherReportListsQueryData>(TEACHER_REPORT_LIST_QUERY_KEY, (old) =>
        old?.map((teacherReportList) =>
          teacherReportList.id === context?.tmpTeacherReportListId
            ? { ...teacherReportList, pendingRequestStatus: 'error' }
            : teacherReportList,
        ),
      );
    },
  });

  return {
    createTeacherReportList: mutateAsync,
    isLoading: isPending,
  };
}
