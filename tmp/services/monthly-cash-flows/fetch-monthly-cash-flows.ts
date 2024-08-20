import type { IMonthlyCashFlowDTO } from '@/dtos/monthly-cash-flow-dto';
import { httpClient } from '@/services/http-client';

interface ISorting {
	id: string
	desc: boolean
}

export interface IMonthlyCashFlowsSearchOptions {
	pageIndex: number
	searchTerm?: string
	sorting?: ISorting[]
}

export interface IMonthlyCashFlowsSearchResponse {
	monthlyCashFlows: IMonthlyCashFlowDTO[]
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
}: IMonthlyCashFlowsSearchOptions): Promise<IMonthlyCashFlowsSearchResponse | undefined> {
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
		`/monthly-cash-flows?pageIndex=${pageIndex}${searchTermQuery}${sortingQuery}`,
	)

	return {
		monthlyCashFlows: data?.monthlyCashFlows?.map((monthlyCashFlow: IMonthlyCashFlowDTO) => ({
			id: monthlyCashFlow.id,
			date: monthlyCashFlow.date,
			automaticIncome: monthlyCashFlow.automaticIncome,
			manualIncome: monthlyCashFlow.manualIncome,
			automaticExpense: monthlyCashFlow.automaticExpense,
			manualExpense: monthlyCashFlow.manualExpense,
			amount: monthlyCashFlow.amount,
		})),
		meta: {
			pageIndex: data?.meta.pageIndex,
			perPage: data.meta.perPage,
			totalCount: data?.meta.totalCount,
		},
	}
}
