import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { IPhysicalAssessmentHistoryDTO } from '@/dtos/physical-assessment-history-dto';
import { PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY } from '@/hooks/physical-assessment-history/use-physical-assessment-history';
import { physicalAssessmentHistoryService } from '@/services/physical-assessment-history';

export function useUpdatePhysicalAssessmentHistory() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: physicalAssessmentHistoryService.update,
    onMutate: (variables) => {
      const previousPhysicalAssessmentHistory =
        queryClient.getQueryData<IPhysicalAssessmentHistoryDTO[]>(PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY);

      queryClient.setQueryData<IPhysicalAssessmentHistoryDTO[]>(PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY, (old) =>
        old?.map((physicalAssessmentHistory) =>
          physicalAssessmentHistory.id === variables.id ? { ...physicalAssessmentHistory, ...variables } : physicalAssessmentHistory,
        ),
      );

      return { previousPhysicalAssessmentHistory };
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY });

      queryClient.setQueryData<IPhysicalAssessmentHistoryDTO[]>(
        PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY,
        context?.previousPhysicalAssessmentHistory,
      );
    },
  });

  return {
    updatePhysicalAssessmentHistory: mutateAsync,
    isLoading: isPending,
  };
}
