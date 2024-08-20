import type { IManualIncomeDTO } from '@/dtos/manual-income-dto';
import { httpClient } from '@/services/http-client';

interface ISorting {
	id: string
	desc: boolean
}

export interface IManualIncomesSearchOptions {
	pageIndex: number
	searchTerm?: string
	sorting?: ISorting[]
}

export interface IManualIncomesSearchResponse {
	manualIncomes: IManualIncomeDTO[]
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
}: IManualIncomesSearchOptions): Promise<IManualIncomesSearchResponse | undefined> {
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
		`/manual-incomes?pageIndex=${pageIndex}${searchTermQuery}${sortingQuery}`,
	)

	return {
		manualIncomes: data?.manualIncomes?.map((manualIncome: IManualIncomeDTO) => ({
			id: manualIncome.id,
			date: manualIncome.date,
			value: manualIncome.value,
			subject: manualIncome.subject,
		})),
		meta: {
			pageIndex: data?.meta.pageIndex,
			perPage: data.meta.perPage,
			totalCount: data?.meta.totalCount,
		},
	}
}
