import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY, type PhysicalAssessmentHistoryQueryData } from '@/hooks/physical-assessment-history/use-physical-assessment-history';
import { physicalAssessmentHistoryService } from '@/services/physical-assessment-history';

export function useCreatePhysicalAssessmentHistory() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: physicalAssessmentHistoryService.create,
    onMutate: (variables) => {
      const tmpPhysicalAssessmentHistoryId = String(Math.random());

      queryClient.setQueryData<PhysicalAssessmentHistoryQueryData>(PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY, (old) => {
        return old?.concat({
          ...variables,
          id: tmpPhysicalAssessmentHistoryId,
          pendingRequestStatus: 'pending',
          createdAt: new Date().toISOString(),
        });
      });

      return { tmpPhysicalAssessmentHistoryId };
    },
    onSuccess: async (data, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY });

      queryClient.setQueryData<PhysicalAssessmentHistoryQueryData>(PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY, (old) =>
        old?.map((physicalAssessmentHistory) =>
          physicalAssessmentHistory.id === context.tmpPhysicalAssessmentHistoryId ? data : physicalAssessmentHistory,
        ),
      );
    },
    onError: async (_error, _variables, context) => {
      await queryClient.cancelQueries({ queryKey: PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY });

      queryClient.setQueryData<PhysicalAssessmentHistoryQueryData>(PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY, (old) =>
        old?.map((physicalAssessmentHistory) =>
          physicalAssessmentHistory.id === context?.tmpPhysicalAssessmentHistoryId
            ? { ...physicalAssessmentHistory, pendingRequestStatus: 'error' }
            : physicalAssessmentHistory,
        ),
      );
    },
  });

  return {
    createPhysicalAssessmentHistory: mutateAsync,
    isLoading: isPending,
  };
}
