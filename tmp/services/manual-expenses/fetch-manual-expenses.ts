import type { IManualExpenseDTO } from '@/dtos/manual-expense-dto';
import { httpClient } from '@/services/http-client';

interface ISorting {
	id: string
	desc: boolean
}

export interface IManualExpensesSearchOptions {
	pageIndex: number
	searchTerm?: string
	sorting?: ISorting[]
}

export interface IManualExpensesSearchResponse {
	manualExpenses: IManualExpenseDTO[]
	meta: {
		pageIndex: number
		perPage: number
		totalCount: number
	}
}

export async function fetch({
	pageIndex,
	searchTerm,
	sorting,
}: IManualExpensesSearchOptions): Promise<IManualExpensesSearchResponse | undefined> {
	const normalizeSorting = (sorting: ISorting[] | undefined): string => {
		if (!sorting || sorting.length === 0) return ''

		const normalizedSorting = sorting[0].id
		return normalizedSorting
	}

	const searchTermQuery = searchTerm ? `&searchTerm=${searchTerm}` : ''
	const sortingQuery = sorting
		? `&sortingField=${normalizeSorting(sorting)}&orderBy=${sorting[0].desc ? 'desc' : 'asc'}`
		: ''

	const { data } = await httpClient.get(
		`/manual-expenses?pageIndex=${pageIndex}${searchTermQuery}${sortingQuery}`,
	)

	return {
		manualExpenses: data?.manualExpenses?.map((manualExpense: IManualExpenseDTO) => ({
			id: manualExpense.id,
			date: manualExpense.date,
			value: manualExpense.value,
			subject: manualExpense.subject,
		})),
		meta: {
			pageIndex: data?.meta.pageIndex,
			perPage: data.meta.perPage,
			totalCount: data?.meta.totalCount,
		},
	}
}
