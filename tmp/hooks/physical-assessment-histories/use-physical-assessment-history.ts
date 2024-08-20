import { useQuery, useQueryClient } from '@tanstack/react-query';
import { physicalAssessmentHistoryService } from '@/services/physical-assessment-histories';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';
import type { IPhysicalAssessmentHistorySearchOptions, IPhysicalAssessmentHistorySearchResponse } from '@/services/physical-assessment-histories/fetch-physical-assessment-history';

export type PhysicalAssessmentHistoryQueryData = WithStatus<IPhysicalAssessmentHistorySearchResponse>[];

export const PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY = ['physical-assessment-history'];

export function usePhysicalAssessmentHistory(searchOptions: IPhysicalAssessmentHistorySearchOptions) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    staleTime: Number.POSITIVE_INFINITY,
    queryKey: [PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY, searchOptions],
    queryFn: async () => {
      try {
        return await physicalAssessmentHistoryService.fetch(searchOptions);
      } catch (error) {
        const appError = error as AppError;

        if (
          appError.response.data.message ===
          'O histórico de avaliação física solicitado não foi encontrado.'
        ) {
          queryClient.setQueryData<IPhysicalAssessmentHistorySearchResponse[]>(PHYSICAL_ASSESSMENT_HISTORY_QUERY_KEY, () => []);
        }
      }
    },
  });

  return {
    physicalAssessmentHistory: data?.physicalAssessmentHistory ?? [],
    meta: data?.meta,
    isLoading,
  };
}
