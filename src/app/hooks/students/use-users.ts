import { useQuery, useQueryClient } from '@tanstack/react-query'

import { usePagination } from '@app/hooks/use-pagination'
import { usersService } from '@app/services/users'
import { useEffect } from 'react'

interface Props {
	pageIndex: number
	role?: string
	perPage?: number
}

export function useStudents({ pageIndex, perPage = 12, role }: Props) {
	const queryClient = useQueryClient()
	const pagination = usePagination({ perPage, pageIndex })

	const { data, isLoading } = useQuery({
		queryKey: ['students', { page: pagination.currentPage, perPage, role }],
		queryFn: async () => {
			const response = await usersService.findManyUsers({
				pageIndex: pagination.currentPage,
				perPage,
				role,
			})
			pagination.setTotalItems(response.meta.totalCount)
			return response
		},
	})

	useEffect(() => {
		if (pagination.hasNextPage) {
			const nextPage = pagination.currentPage + 1

			queryClient.prefetchQuery({
				queryKey: ['students', { page: nextPage, perPage, role }],
				queryFn: async () => {
					const response = await usersService.findManyUsers({
						pageIndex: pagination.currentPage,
						perPage,
						role,
					})
					pagination.setTotalItems(response.meta.totalCount)
					return response
				},
			})
		}
	}, [
		pagination.currentPage,
		pagination.hasNextPage,
		role,
		perPage,
		queryClient,
		pagination.setTotalItems,
	])

	return {
		students: data?.users ?? [],
		isLoading,
		pagination,
	}
}
