import { useCallback, useState } from 'react'

interface Props {
	pageIndex: number
}

export function usePagination({ pageIndex = 1 }: Props) {
	const [currentPage, setCurrentPage] = useState(pageIndex)

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
		nextPage,
		previousPage,
		setPage,
	}
}
