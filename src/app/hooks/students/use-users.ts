import { useQuery } from '@tanstack/react-query'

import { usePagination } from '@app/hooks/use-pagination'
import { findManyUsers } from '@app/services/users/find-many-users'

interface Props {
	pageIndex: number
	role?: string
	perPage?: number
}

export function useStudents({ pageIndex, perPage = 12, role }: Props) {
		const { currentPage, nextPage, previousPage, setPage } = usePagination({ pageIndex })

		const { data, isLoading } = useQuery({
			queryKey: ['students', { page: currentPage, perPage, role }],
			queryFn: () => findManyUsers({ pageIndex, perPage, role }),
		})

		const totalItems = data?.meta.totalCount ?? 0
		const totalPages = Math.ceil(totalItems / perPage)
		const hasNextPage = currentPage < totalPages
		const hasPreviousPage = currentPage > 1

		return {
			students: data ?? [],
			isLoading,
			pagination: {
				currentPage,
				totalPages,
				hasNextPage,
				hasPreviousPage,
				nextPage,
				previousPage,
				setPage,
			}
		}
	}
