import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { IStudentGoalDTO } from '@/dtos/student-goal-dto';
import { studentGoalsService } from '@/services/student-goals';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';
import type { IStudentGoalsSearchOptions, IStudentGoalsSearchResponse } from '@/services/student-goals/fetch-student-goals';

export type StudentGoalsQueryData = WithStatus<IStudentGoalsSearchResponse>[];

export const STUDENT_GOALS_QUERY_KEY = ['student-goals'];

export function useStudentGoals(searchOptions: IStudentGoalsSearchOptions) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    staleTime: Number.POSITIVE_INFINITY,
    queryKey: [STUDENT_GOALS_QUERY_KEY, searchOptions],
    queryFn: async () => {
      try {
        return await studentGoalsService.fetch(searchOptions);
      } catch (error) {
        const appError = error as AppError;

        if (
          appError.response.data.message ===
          'A meta do estudante solicitada não foi encontrada.'
        ) {
          queryClient.setQueryData<IStudentGoalsSearchResponse[]>(STUDENT_GOALS_QUERY_KEY, () => []);
        }
      }
    },
  });

  return {
    studentGoals: data?.studentGoals ?? [],
    meta: data?.meta,
    isLoading,
  };
}
