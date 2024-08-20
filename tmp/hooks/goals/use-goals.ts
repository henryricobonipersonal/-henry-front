import { useQuery, useQueryClient } from '@tanstack/react-query';
import { goalsService } from '@/services/goals';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';
import type { IGoalsSearchOptions, IGoalsSearchResponse } from '@/services/goals/fetch-goals';

export type GoalsQueryData = WithStatus<IGoalsSearchResponse>[];

export const GOALS_QUERY_KEY = ['goals'];

export function useGoals(searchOptions: IGoalsSearchOptions) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    staleTime: Number.POSITIVE_INFINITY,
    queryKey: [GOALS_QUERY_KEY, searchOptions],
    queryFn: async () => {
      try {
        return await goalsService.fetch(searchOptions);
      } catch (error) {
        const appError = error as AppError;

        if (
          appError.response.data.message ===
          'O objetivo solicitado não foi encontrado.'
        ) {
          queryClient.setQueryData<IGoalsSearchResponse[]>(GOALS_QUERY_KEY, () => []);
        }
      }
    },
  });

  return {
    goals: data?.goals ?? [],
    meta: data?.meta,
    isLoading,
  };
}
