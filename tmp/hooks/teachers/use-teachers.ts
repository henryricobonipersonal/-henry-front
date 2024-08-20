import { useQuery, useQueryClient } from '@tanstack/react-query';
import { teachersService } from '@/services/teachers';
import type { AppError } from '@/services/http-client';
import type { WithStatus } from '@/utils/with-status';
import type { ITeachersSearchOptions, ITeachersSearchResponse } from '@/services/teachers/fetch-teachers';

export type TeachersQueryData = WithStatus<ITeachersSearchResponse>[];

export const TEACHERS_QUERY_KEY = ['teachers'];

export function useTeachers(searchOptions: ITeachersSearchOptions) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    staleTime: Number.POSITIVE_INFINITY,
    queryKey: [TEACHERS_QUERY_KEY, searchOptions],
    queryFn: async () => {
      try {
        return await teachersService.fetch(searchOptions);
      } catch (error) {
        const appError = error as AppError;

        if (
          appError.response.data.message ===
          'O professor solicitado não foi encontrado.'
        ) {
          queryClient.setQueryData<ITeachersSearchResponse[]>(TEACHERS_QUERY_KEY, () => []);
        }
      }
    },
  });

  return {
    teachers: data?.teachers ?? [],
    meta: data?.meta,
    isLoading,
  };
}
