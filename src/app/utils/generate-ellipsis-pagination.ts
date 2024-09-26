interface Input {
	currentPage: number
	totalPages: number
	surroundingPages?: number
}

export function generateEllipsisPagination({
		currentPage,
		totalPages,
		surroundingPages = 2,
	}: Input): (number | string)[] {
		const pages: (number | string)[] = []

		for (let i = 1; i <= totalPages; i++) {
			const isFirstPage = i === 1
			const isLastPage = i === totalPages
			const isWithinLowerBound = i >= currentPage - surroundingPages
			const IsWithinUpperBound = i <= currentPage + surroundingPages
			const isEllipsisPosition =
				i === currentPage - (surroundingPages - 1) || i === currentPage + (surroundingPages + 1)

			if (isEllipsisPosition && !isFirstPage && !isLastPage) {
				pages.push('...')
				continue
			}

			if (isFirstPage || isLastPage || (isWithinLowerBound && IsWithinUpperBound)) {
				pages.push(i)
			}

			pages.push(i)
		}

		return pages
	}
