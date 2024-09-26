import { useCallback, useEffect, useState } from 'react'

interface Props {
	perPage: number
	pageIndex?: number
	role?: string
}

export function usePagination({ perPage, pageIndex = 1, role }: Props) {
	const [totalItems, setTotalItems] = useState(0)
	const [currentPage, setCurrentPage] = useState(() => {
		const searchParams = new URLSearchParams(window.location.search)
		const page = searchParams.get('page')
		if (!page) return pageIndex
		return Number(page)
	})

	const totalPages = Math.ceil(totalItems / perPage)
	const hasNextPage = currentPage < totalPages
	const hasPreviousPage = currentPage > 1
	const lastPage = totalPages - 1
	const firstPage = 1

	useEffect(() => {
		const url = new URL(window.location.href)

		url.searchParams.set('page', String(currentPage))
		url.searchParams.set('perPage', String(perPage))
		url.searchParams.set('role', role ?? '')

		const newUrl = `${url.origin + url.pathname}?${url.searchParams.toString()}`

		window.history.replaceState({}, '', newUrl)
	}, [currentPage, perPage, role])

	const nextPage = useCallback(() => {
		setCurrentPage((prevState) => prevState + 1)
	}, [])

	const previousPage = useCallback(() => {
		setCurrentPage((prevState) => prevState - 1)
	}, [])

	const setPage = useCallback((page: number) => {
		setCurrentPage(page)
	}, [])

	return {
		currentPage,
		hasNextPage,
		hasPreviousPage,
		lastPage,
		firstPage,
		totalPages,
		setTotalItems,
		nextPage,
		previousPage,
		setPage,
	}
}
