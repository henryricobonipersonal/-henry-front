import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { ITeacherReportListDTO } from '@/dtos/teacher-report-list-dto';
import { TEACHER_REPORT_LIST_QUERY_KEY } from '@/hooks/teacher-report-list/use-teacher-report-list';
import { teacherReportListService } from '@/services/teacher-report-list';

export function useUpdateTeacherReportList() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: teacherReportListService.update,
    onMutate: (variables) => {
      const previousTeacherReportLists =
        queryClient.getQueryData<ITeacherReportListDTO[]>(TEACHER_REPORT_LIST_QUERY_KEY);

      queryClient.setQueryData<ITeacherReportListDTO[]>(TEACHER_REPORT_LIST_QUERY_KEY, (old) =>
        old?.map((teacherReportList) =>
          teacherReportList.id === variables.id ? { ...teacherReportList, ...variables } : teacherReportList,
        ),
      );

      return { previousTeacherReportLists };
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: TEACHER_REPORT_LIST_QUERY_KEY });

      queryClient.setQueryData<ITeacherReportListDTO[]>(
        TEACHER_REPORT_LIST_QUERY_KEY,
        context?.previousTeacherReportLists,
      );
    },
  });

  return {
    updateTeacherReportList: mutateAsync,
    isLoading: isPending,
  };
}
