import type { IPhysicalAssessmentHistoryDTO } from '@/dtos/physical-assessment-history-dto';
import { httpClient } from '@/services/http-client';

interface ISorting {
	id: string
	desc: boolean
}

export interface IPhysicalAssessmentHistorySearchOptions {
	pageIndex: number
	searchTerm?: string
	sorting?: ISorting[]
}

export interface IPhysicalAssessmentHistorySearchResponse {
	physicalAssessmentHistory: IPhysicalAssessmentHistoryDTO[]
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
}: IPhysicalAssessmentHistorySearchOptions): Promise<IPhysicalAssessmentHistorySearchResponse | undefined> {
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
		`/physical-assessment-history?pageIndex=${pageIndex}${searchTermQuery}${sortingQuery}`,
	)

	return {
		physicalAssessmentHistory: data?.physicalAssessmentHistory?.map((physicalAssessmentHistory: IPhysicalAssessmentHistoryDTO) => ({
			id: physicalAssessmentHistory.id,
			data: physicalAssessmentHistory.data,
			goalAchieved: physicalAssessmentHistory.goalAchieved,
		})),
		meta: {
			pageIndex: data?.meta.pageIndex,
			perPage: data.meta.perPage,
			totalCount: data?.meta.totalCount,
		},
	}
}
