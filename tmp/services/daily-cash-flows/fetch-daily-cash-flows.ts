import type { IDailyCashFlowDTO } from '@/dtos/daily-cash-flow-dto';
import { httpClient } from '@/services/http-client';

interface ISorting {
	id: string
	desc: boolean
}

export interface IDailyCashFlowsSearchOptions {
	pageIndex: number
	searchTerm?: string
	sorting?: ISorting[]
}

export interface IDailyCashFlowsSearchResponse {
	dailyCashFlows: IDailyCashFlowDTO[]
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
}: IDailyCashFlowsSearchOptions): Promise<IDailyCashFlowsSearchResponse | undefined> {
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
		`/daily-cash-flows?pageIndex=${pageIndex}${searchTermQuery}${sortingQuery}`,
	)

	return {
		dailyCashFlows: data?.dailyCashFlows?.map((dailyCashFlow: IDailyCashFlowDTO) => ({
			id: dailyCashFlow.id,
			date: dailyCashFlow.date,
			automaticIncome: dailyCashFlow.automaticIncome,
			manualIncome: dailyCashFlow.manualIncome,
			automaticExpense: dailyCashFlow.automaticExpense,
			manualExpense: dailyCashFlow.manualExpense,
			amount: dailyCashFlow.amount,
		})),
		meta: {
			pageIndex: data?.meta.pageIndex,
			perPage: data.meta.perPage,
			totalCount: data?.meta.totalCount,
		},
	}
}
