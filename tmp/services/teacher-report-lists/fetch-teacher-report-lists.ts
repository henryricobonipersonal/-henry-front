import type { ITeacherReportListDTO } from '@/dtos/teacher-report-list-dto';
import { httpClient } from '@/services/http-client';

interface ISorting {
	id: string
	desc: boolean
}

export interface ITeacherReportListsSearchOptions {
	pageIndex: number
	searchTerm?: string
	sorting?: ISorting[]
}

export interface ITeacherReportListsSearchResponse {
	teacherReportLists: ITeacherReportListDTO[]
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
}: ITeacherReportListsSearchOptions): Promise<ITeacherReportListsSearchResponse | undefined> {
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
		`/teacher-report-lists?pageIndex=${pageIndex}${searchTermQuery}${sortingQuery}`,
	)

	return {
		teacherReportLists: data?.teacherReportLists?.map((teacherReportList: ITeacherReportListDTO) => ({
			id: teacherReportList.id,
			name: teacherReportList.name,
		})),
		meta: {
			pageIndex: data?.meta.pageIndex,
			perPage: data.meta.perPage,
			totalCount: data?.meta.totalCount,
		},
	}
}
